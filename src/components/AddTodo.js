import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../reducers/action';
import './style.css'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={
          e => {
            e.preventDefault();

            if (!input.value.trim()) {
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }>
        
        <input className="input1" type="text" ref={el => (input = el)} />
        <button className="addbtn" type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);