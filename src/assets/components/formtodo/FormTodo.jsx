// styles
import { useState } from 'react';
import styles from './FormTodo.module.css'

const FormTodo = ({ createdTodoList, setNameTodo }) => {

    const handleOnChange = (e) => {
        setNameTodo(e.target.value);
    };

    return (
        <div className={styles.form_todo}>
            <div className={styles.container}>
                <input
                    type="text"
                    placeholder='informe o nome da tarefa...'
                    onChange={handleOnChange}
                />
                <button
                    className={styles.created}
                    type='button'
                    onClick={createdTodoList}
                >
                    Criar
                </button>
            </div>
        </div>
    )

};

export default FormTodo;