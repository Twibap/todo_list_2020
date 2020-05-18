import React, { useState } from 'react';
import './App.css';
import { ITodo, seeds } from './todoSeeds';
import InputTodo from './InputTodo';

function TodoList(props: ITodo) {
  const [state, setState] = useState({
    isDone: props.checked
  });
  return (
    <div key={props.id}>
      <h2>{props.title}</h2>
      <p>생성일 : {props.createdAt.toDateString()}</p>
      <input
        type="checkbox"
        checked={state.isDone}
        onChange={e => {
          const checked = e.target.checked;
          setState({
            isDone: checked,
          });
        }} />
      <p>{state.isDone ? "Done!" : "Not yet!"}</p>
      <p>내 용 : {props.content}</p>
      <hr/>
    </div>
  )
}

function App() {
  const [state, setState] = useState({
    todoList: seeds,
  });

  const addTodoItem = (item: ITodo) => {
    setState({ todoList: state.todoList.concat(item) });
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <label><input type="checkbox" name="isShown"/> 한 일 치우기</label>
      <hr/>
      <div>
        {
          state.todoList.map(seed => {
            return TodoList(seed)
          })
        }
      </div>
      <InputTodo targetList={state.todoList} onSubmit={addTodoItem}/>
    </div>
  );
}

export default App;
