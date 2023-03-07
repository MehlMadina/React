import PostsPage from "../../pages/PostsPage";
import UsersPage from "../../pages/UsersPage";
import NavMenu from "../NavMenu";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "../../requests/users";
import { useEffect, useState } from "react";
import { Context } from "../../context";
import { getPosts } from '../../requests/posts';


function App() {
  const [users, setUsers] = useState([]);
  const [ posts, setPosts ] = useState([]); 

  const createUsersCard = user => setUsers(prev => [...prev, user]);
  const createNewPost = post => setPosts(prev => [...prev, post]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);
 

  useEffect(() => {
    getPosts(setPosts)
  }, [])
  console.log(posts);


  return (
    <div>
      <Context.Provider value={{ users, createUsersCard, posts, createNewPost }}>
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
