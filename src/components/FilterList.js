import React from 'react';
import FilterLink from './FilterLink';
import { VisibilityFilters } from '../reducers/action';
import './style.css'

const FilterList = () => ( 
  <div className="list">
    <span className="all">Filters : </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Incompleted</FilterLink>
  </div>
);

export default FilterList;