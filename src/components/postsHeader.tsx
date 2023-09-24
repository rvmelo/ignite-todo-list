import React from 'react';
import styles from './postsHeader.module.css';

const PostsHeader: React.FC = () => {
  return (
    <div className={styles.postsInfoContainer}>
        <div className={styles.taskLeftInfoContainer}>
            <span className={styles.taskLeftInfoText}>Tarefas criadas</span>
            <div className={styles.numberWrapper}>
               <span className={styles.numberInfoText}>5</span>
            </div>
        </div>
        <div className={styles.taskRightInfoContainer}>
            <span className={styles.taskRightInfoText}>Concluídas</span>
            <div className={styles.numberWrapper}>
               <span className={styles.numberInfoText}>2 de 5</span>
            </div>
        </div>
    </div>
  );
}

export { PostsHeader };