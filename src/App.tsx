import { Header } from "./components/header";
import styles from './App.module.css';
import './global.css';
import { TodoInput } from "./components/todoInput";
import { PostsHeader } from "./components/postsHeader";
import { Post } from "./components/post";
import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

export interface PostData {
  id: string;
  text: string;
  checked: boolean;
}

function App() {

  const [posts, setPosts] = useState<PostData[]>([]);
  const [completedPostsCount, setCompletedPostsCount] = useState(0);

  useEffect(() => {
    setCompletedPostsCount(posts.filter(postItem => postItem.checked).length)
  }, [posts]);

  const handlePostPublish = (text: string) => {

    if (text) {
      setPosts(prev => [...prev, { id: uuid(), text, checked: false }]);
    }

  }

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
        <TodoInput handlePostPublish={handlePostPublish} />
        <div className={styles.postsWrapper}>
          <PostsHeader totalPosts={posts.length} completedPosts={completedPostsCount} />
         {posts.map(post => 
            <Post 
              key={uuid()} 
              post={post} 
              setPosts={setPosts} />
          )}
        </div>
     </div>
    </>
  )
}

export default App
