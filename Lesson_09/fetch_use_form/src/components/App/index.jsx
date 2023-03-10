import PostsPage from "../../pages/PostsPage";
import UsersPage from "../../pages/UsersPage";
import NavMenu from "../NavMenu";
import { Routes, Route } from "react-router-dom";
import { getUsers } from "../../requests/users";
import { useEffect, useState } from "react";
import { Context } from "../../context";
import { getPosts } from '../../requests/posts';
import ToDosPage from "../../pages/ToDosPage";
import { getToDos } from '../../requests/todos';


function App() {
  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]); 
  const [ todos, setToDos ] = useState([]);

  const createUsersCard = user => setUsers(prev => [...prev, user]);
  const createNewPost = post => setPosts(prev => [...prev, post]);
  const createNewToDo = todos => setToDos(prev => [...prev, todos]);


  useEffect(() => {
    getUsers(setUsers);
    getPosts(setPosts);
    getToDos(setToDos);
  }, []);
 

  return (
    <div>
      <Context.Provider value={{ users, createUsersCard, posts, createNewPost, todos, createNewToDo }}>
        <NavMenu />
        <Routes>
          <Route path="/users_page" element={<UsersPage />} />
          <Route path="/posts_page" element={<PostsPage />} />
          <Route path="/todos_page" element={<ToDosPage />}/>
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
