import React, { useState } from 'react';
import { ITodo } from './todoSeeds';

export interface IInputTodoProps {
    targetList: ITodo[],
    onSubmit: (item: ITodo) => void
}

export default function InputTodo(props : IInputTodoProps){
    const [state, setState] = useState({
        title: String,
        // dueDate: Date,
        isImportant: Boolean,
        content: String,
    });
    const submitMeno = (event: React.FormEvent) => {
        // alert("입력되었습니다.");
        const todo: ITodo = {
            id: props.targetList.length,
            title: state.title(),
            content: state.content(),
            important: state.isImportant(),
            createdAt: new Date(),
            updatedAt: new Date(),
            checked: false,
        };
        props.onSubmit(todo);
        // event.preventDefault();
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setState({
            ...state,
            [name]: value,
        });
    }
    return (
        <form onSubmit={submitMeno}>
            <h1>할일 입력하기</h1>
            <label>제목 :
                    <input
                    type="text"
                    name="title"
                    onChange={handleInputChange} />
            </label>
            <br/>
            {/* <label>기한 :
                    <input
                    type="datepicker"
                    name="dueDate"
                    onChange={handleInputChange} />
            </label> */}
            {/* <br/> */}
            {/* <label>중요 :
                    <input
                    type="checkbox"
                    name="important"
                    onChange={handleInputChange} />
            </label> */}
            <br/>
            <label>내용 :
                    <input
                    type="text"
                    name="content"
                    onChange={handleInputChange} />
            </label>
            <br/>
            <br/>
            <input type="submit" value="submit" />
            <br/>
            <br/>
        </form>
    );
}