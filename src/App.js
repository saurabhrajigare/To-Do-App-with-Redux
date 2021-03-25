import React from 'react';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import FilterList from './components/FilterList';
import './App.css'
import Header from './components/Header'
import FormValidaion from "./components/FormValidation/FormValidation";

const App = () => (
  <>
    <FormValidaion />
    <Header />
    <div className="main">
      <AddTodo />
      <FilterList />
      <VisibleTodoList />
      <p className="list1">Click on todo item for mark as completed</p>
    </div>
  </>
);

export default App;