import { Header } from "./components/header";
import styles from './App.module.css';
import './global.css';
import { TodoInput } from "./components/todoInput";

function App() {

  return (
    <>
     <Header />
     <div className={styles.wrapper}>
        <TodoInput />
     </div>
    </>
  )
}

export default App
