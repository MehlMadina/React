import { posts_data } from "../../data/post";
import PostContainer from "../PostsContainer";

function App() {
  return (
    <div>
      <PostContainer posts={posts_data}/>
    </div>
  );
}

export default App;
