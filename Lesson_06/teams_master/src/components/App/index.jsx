import ConfigurationsPages from "../../pages/ConfigurationsPages";
import TeamsPages from "../../pages/TeamsPages";
import Nav from "../Nav";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Context } from '../../context'

function App() {
  const [teams, setTeams] = useState([]);

  const add_team = (value) => {
    setTeams([...teams, { value, label: value }]);
  };

  return (
    <div>
      <Context.Provider value={{ add_team, teams }}>
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
