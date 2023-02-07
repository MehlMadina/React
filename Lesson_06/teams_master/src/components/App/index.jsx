import ConfigurationsPages from "../../pages/ConfigurationsPages";
import TeamsPages from "../../pages/TeamsPages";
import Nav from "../Nav";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Context } from '../../context'

function App() {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);

  const add_team = (value) => {
    setTeams([...teams, { value, label: value }]);
  };


  const add_user = (name, team) => {
    setUsers([
      ...users,
      {
        id: Date.now(),
        name,
        team,
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
