// icons
import { BsBootstrapReboot } from "react-icons/bs";
// componets
import Todo from '../todo/Todo';
// styles
import styles from './ListTodos.module.css'

const ListTodos = ({ listTodo, removeTodo }) => {

    return (
        <div className={styles.list_todos}>
            <div className={styles.controller}>
                <BsBootstrapReboot />
            </div>
            <ul>
                {listTodo.map((item) => (
                    <li key={item.id}>
                        {<Todo name={item.name} removeTodo={removeTodo} todo={item} />}
                    </li>))
                }
            </ul>
        </div >
    );

};

export default ListTodos;