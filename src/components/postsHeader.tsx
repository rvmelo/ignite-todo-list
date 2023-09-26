import React from 'react';
import styles from './postsHeader.module.css';

interface Props {
  totalPosts: number;
  completedPosts: number;
}

const PostsHeader: React.FC<Props> = ({ totalPosts, completedPosts }) => {
  return (
    <div className={styles.postsInfoContainer}>
        <div className={styles.taskLeftInfoContainer}>
            <span className={styles.taskLeftInfoText}>Tarefas criadas</span>
            <div className={styles.numberWrapper}>
               <span className={styles.numberInfoText}>{totalPosts}</span>
            </div>
        </div>
        <div className={styles.taskRightInfoContainer}>
            <span className={styles.taskRightInfoText}>Concluídas</span>
            <div className={styles.numberWrapper}>
               <span className={styles.numberInfoText}>{completedPosts} de {totalPosts}</span>
            </div>
        </div>
    </div>
  );
}

export { PostsHeader };