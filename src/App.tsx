import React, { useState } from 'react';
import './App.css';
import { ITodo, seeds } from './todoSeeds';

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
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>{seeds.map(seed => {
        return TodoList(seed)
      })}</div>
    </div>
  );
}

export default App;
