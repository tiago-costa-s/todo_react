// hook 
import { useEffect, useState } from 'react';
// components
import FormTodo from './assets/components/formtodo/FormTodo'
import ListTodos from './assets/components/listtodos/ListTodos';
// styles
import './App.css';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [nameTodo, setNameTodo] = useState();

  // cria a lista de todos
  const createdTodoList = () => {
    if (!nameTodo) return

    const newItem = {
      id: generetedId(),
      name: nameTodo,
      status: false,
      creation: generetedCreationDate(),
    };

    const updatedTodos = [...listTodo, newItem];
    setListTodo(updatedTodos);

    localStorage.setItem('listtodo', JSON.stringify(listTodo));
    // setNameTodo('');
  };

  // gera o id da tarefa
  const generetedId = () => {
    return Math.floor(Math.random() * 10000);
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

  // passa na local storage e atualiza a lista
  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('listtodo'));
    if (getLocalStorage) {
      setListTodo(getLocalStorage);
    }
  }, []);

  // completa a tarefa
  const toggleCompletedTodo = (id) => {
    const updateList = listTodo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setListTodo(updateList);
    localStorage.setItem('listtodo', JSON.stringify(updateList));
  };

  // remove a tarefa
  const removeTodo = (id) => {
    const updateList = listTodo.filter((item) => item.id !== id);
    setListTodo(updateList);
    localStorage.setItem('listtodo', JSON.stringify(updateList));
    console.log('TESTE REMOVE!')
  };

  const resetData = () => {
    const updateList = localStorage.removeItem('listtodo');
    setListTodo(updateList);
    setListTodo([])
    console.log('RESETDATA!')
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

        {listTodo.length !== 0 || undefined ?
          <ListTodos
            listTodo={listTodo}
            setNameTodo={setNameTodo}
            removeTodo={removeTodo}
            toggleCompletedTodo={toggleCompletedTodo}
            resetData={resetData}
          />
          :
          <p>Você ainda não possui tarefas...</p>
        }
      </div>
    </div>
  );

};

export default App;
