import React, { FormEvent, useState } from 'react';
import styles from './todoInput.module.css';
import plus from '../assets/plus.svg';

interface Props {
  handlePostPublish: (post: string) => void;
}

const TodoInput: React.FC<Props> = ({ handlePostPublish }) => {

  const [post, setPost] = useState('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setPost(event.target.value);
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handlePostPublish(post);
    setPost('');
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSubmit} className={styles.todoForm}>
        <input onChange={handleTextChange} placeholder='Adicione uma nova tarefa' value={post}/>
        <button>
          Criar
          <img itemType='logo' src={plus} alt="Criar tarefa"/>
        </button>
      </form>
    </div>
  );
}

export { TodoInput }
