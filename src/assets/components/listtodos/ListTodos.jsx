// icons
import { BsBootstrapReboot } from "react-icons/bs";
// componets
import Todo from '../todo/Todo';
// styles
import styles from './ListTodos.module.css'

const ListTodos = ({ listTodo, removeTodo, toggleCompletedTodo, resetData }) => {

    return (
        <div className={styles.list_todos}>
            <div className={styles.controller}>
                <button
                    className={styles.btn}
                    onClick={resetData}
                >
                    Resetar
                </button>
                <button
                    className={styles.btn}
                >
                    Ordernar
                </button>
            </div>
            <ul>
                {listTodo.map((item) => (
                    <li key={item.id}>
                        {<Todo
                            name={item.name}
                            removeTodo={removeTodo}
                            todo={item}
                            toggleCompletedTodo={toggleCompletedTodo}
                            resetData={resetData}
                        />}
                    </li>
                ))}
            </ul>
        </div >
    );

};

export default ListTodos;