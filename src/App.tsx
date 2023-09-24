import { Header } from "./components/header";
import styles from './App.module.css';
import './global.css';
import { TodoInput } from "./components/todoInput";
import { PostsHeader } from "./components/postsHeader";
import { Post } from "./components/post";

function App() {

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
        <TodoInput />
        <div className={styles.postsWrapper}>
          <PostsHeader />
          <Post />
        </div>
     </div>
    </>
  )
}

export default App
