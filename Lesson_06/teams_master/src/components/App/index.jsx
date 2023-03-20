import ConfigurationsPages from "../../pages/ConfigurationsPages";
import TeamsPages from "../../pages/TeamsPages";
import Nav from "../Nav";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Context } from '../../context'

function App() {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const teams = JSON.parse(localStorage.getItem('teams'));
    const users = JSON.parse(localStorage.getItem('users'));
    setTeams(teams);
    setUsers(users);
  }, []);

  useEffect(() => {
    localStorage.setItem('teams', JSON.stringify(teams));
    localStorage.setItem('users', JSON.stringify(users));
  }, [teams, users])

  const add_team = (value) => {
    setTeams([...teams, { value, label: value }]);
  };


  const add_user = (name, team) => {
    setUsers([
      ...users,
      {
        id: Date.now(),
        name,
        team
      },
    ]);
  };

  
  return (
    <div>
      <Context.Provider value={{ add_team, teams, users, add_user}}>
        <Nav />
        <Routes>
          <Route
            path="/configurations_page"
            element={<ConfigurationsPages />}
          />
          <Route path="/teams_page" element={<TeamsPages />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
