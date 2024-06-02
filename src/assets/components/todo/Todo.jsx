// icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
// styles
import styles from './Todo.module.css';

const Todo = ({ todo, name, removeTodo }) => {

    return (
        <div className={styles.todo}>
            <div className={styles.container}>
                <p className={styles.title}>{name}</p>
                <div className={styles.control_actions}>
                    <button
                        className={styles.btn}
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
            <div className={styles.date}>
                <p>{todo.creation}</p>
            </div>
        </div>
    );

};

export default Todo;