// icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
// styles
import styles from './Todo.module.css';

const Todo = ({ todo, name, removeTodo, toggleCompletedTodo }) => {

    return (
        <div className={todo.status === false ? styles.todo : styles.completed}>
            <div className={styles.container}>
                <p className={styles.title}>{name}</p>
                <div className={styles.control_actions}>
                    <button
                        className={styles.btn}
                        onClick={() => toggleCompletedTodo(todo.id)}
                    >
                        <IoIosCheckmarkCircleOutline className={styles.icons_todo} />
                    </button>
                    <button
                        className={styles.btn}
                        onClick={() => removeTodo(todo.id)}
                    >
                        <IoIosRemoveCircleOutline className={styles.icons_todo} />
                    </button>
                </div>
            </div>
            <div className={styles.date_creation}>
                <p className={styles.date}>{todo.creation}</p>
            </div>
        </div>
    );

};

export default Todo;