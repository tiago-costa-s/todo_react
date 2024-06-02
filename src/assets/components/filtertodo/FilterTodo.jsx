// styles
import styles from './FilterTodo.module.css'

const FilterTodo = () => {

    return (
        <div className={styles.filter_todo}>
            <select name='' id=''>
                <option value='All'>Todos</option>
                <option value='All'>Trabalho</option>
                <option value='All'>Pessoal</option>
            </select>
            <div>
                <button>Crec</button>
                <button>Desc</button>
            </div>
        </div>
    );

};

export default FilterTodo;