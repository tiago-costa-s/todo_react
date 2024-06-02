// components

// styles
import { useEffect, useState } from 'react';
import './App.css'
import FormTodo from './assets/components/formtodo/FormTodo'
import ListTodos from './assets/components/listtodos/ListTodos';

function App() {

  const [listTodo, setListTodo] = useState([]);
  const [nameTodo, setNameTodo] = useState();
  const [completedTodo, setCompletedTodo] = useState(null);

  // cria a lista de todos
  const createdTodoList = () => {
    if (!nameTodo) return

    const newItem = {
      id: generetedId(),
      name: nameTodo,
      completed: completedTodo,
      creation: generetedCreationDate(),
    };

    const updatedTodos = [...listTodo, newItem];

    setListTodo(updatedTodos);
    localStorage.setItem('listtodo', JSON.stringify(listTodo));
    setNameTodo('');
  };

  const generetedId = () => {
    return Math.floor(Math.random() * 10000);
  };

  // passa na local storage e atualiza a lista
  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('listtodo'));
    if (getLocalStorage) {
      setListTodo(getLocalStorage);
    }
  }, []);

  // remove todo
  const removeTodo = (id) => {
    const updateList = listTodo.filter((item) => item.id !== id);

    setListTodo(updateList);
    localStorage.setItem('listtodo', JSON.stringify(updateList));
  };

  // gera data de criação
  const generetedCreationDate = () => {
    const date = new Date();
    const day = String(date.getDay()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    const currentDate = `${day}/${month}/${year}`;
    return currentDate
  };

  // localStorage.removeItem('listtodo');
  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className='container_app'>
        <FormTodo
          createdTodoList={createdTodoList}
          nameTodo={nameTodo}
          setNameTodo={setNameTodo}
        />

        {listTodo.length !== 0 ?
          <ListTodos
            listTodo={listTodo}
            setNameTodo={setNameTodo}
            removeTodo={removeTodo}
          />
          :
          <p>Você ainda não possui tarefas...</p>
        }
      </div>
    </div>
  );

};

export default App;
