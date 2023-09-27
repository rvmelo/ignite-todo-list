import React, { SetStateAction } from 'react';
import trash from '../assets/trash.svg';
import styles from './post.module.css';
import { PostData } from '../App';

interface Props {
  post: PostData;
  setPosts: React.Dispatch<SetStateAction<PostData[]>>
}


const Post: React.FC<Props> = ({ post, setPosts }) => {

  const handleClick = (checked: boolean) => {
    setPosts(prev => {

      const auxPosts = [...prev];

      const postIndex = auxPosts.findIndex(postItem => postItem.id === post.id);

      if (postIndex !== -1) {
        auxPosts[postIndex].checked = !checked;
      }

      return [...auxPosts];
    });
  }

  const handleRemovePost = (postId: string) => {
    setPosts(prev => prev.filter(postItem => postItem.id !== postId));
  }

  return (
    <div className={styles.postWrapper}>

        <input 
          onClick={() => handleClick(post.checked)} 
          type="checkbox" 
          checked={post.checked} 
          onChange={e => e}
        />

      <div className={styles.postTextWrapper}>
        <span className={post.checked ? styles.postSelectedText : styles.postText}>{post.text}</span>
      </div>

      <img onClick={() => handleRemovePost(post.id)} itemType='logo' src={trash} alt="Deletar tarefa" />
    </div>
  );
}

export { Post };