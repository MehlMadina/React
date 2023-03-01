import PostsPage from "../../pages/PostsPage";
import UsersPage from "../../pages/UsersPage";
import NavMenu from "../NavMenu";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "../../requests/users";
import { useEffect, useState } from "react";
import { Context } from "../../context";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  console.log(users);

  return (
    <div>
      <Context.Provider value={{ users }}>
        <NavMenu />
        <Routes>
          <Route path="/users_page" element={<UsersPage />} />
          <Route path="/posts_page" element={<PostsPage />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;