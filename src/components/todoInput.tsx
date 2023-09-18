import React from 'react';
import styles from './todoInput.module.css';
import plus from '../assets/plus.svg';

const TodoInput: React.FC = () => {
  return (
    <div className={styles.formWrapper}>
      <form onSubmit={() => undefined} className={styles.todoForm}>
        <input placeholder='Adicione uma nova tarefa'/>
        <button>
          Criar
          <img itemType='logo' src={plus} alt="Criar tarefa"/>
        </button>
      </form>
    </div>
  );
}

export { TodoInput }
