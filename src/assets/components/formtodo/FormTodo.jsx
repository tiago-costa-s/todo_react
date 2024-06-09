// styles
import { useState } from 'react';
import styles from './FormTodo.module.css'

const FormTodo = ({ createdTodoList, setNameTodo }) => {

    const handleOnChange = (e) => {
        setNameTodo(e.target.value);
    };

    const handleKeyDowm = (e) => {
        if (e.key == 'Enter') {
            createdTodoList();
        }
    };

    return (
        <div className={styles.form_todo}>
            <div className={styles.container}>
                <input
                    type="text"
                    placeholder='Informe o nome da tarefa...'
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDowm}
                />
                <button
                    className={styles.btn_created}
                    type='button'
                    onc
                    onClick={createdTodoList}
                >
                    Criar
                </button>
            </div>
        </div>
    )

};

export default FormTodo;