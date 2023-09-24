import React from 'react';
import trash from '../assets/trash.svg';
import styles from './post.module.css';

const Post: React.FC = () => {
  return (
    <div className={styles.postWrapper}>
      <input className={styles.postCheckBox} type="checkbox" checked />
      <span className={styles.postText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </span>
      <img itemType='logo' src={trash} alt="Deletar tarefa"/>
    </div>
  );
}

export { Post };