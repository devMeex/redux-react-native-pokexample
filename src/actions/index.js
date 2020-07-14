import {ADD_TODO,
    //REMOVE_TODO,
    SET_VISIBILITY_FILTER} from '../actions/types';

    export const VisibilityFilters = {
        SHOW_ALL: 'SHOW_ALL',
        SHOW_COMPLETED: 'SHOW_COMPLETED',
        SHOW_ACTIVE: 'SHOW_ACTIVE'
      }
      
      /*
       * creadores de acciones
       */
      
      export function addTodo(text) {
        return { type: ADD_TODO, text }
      }
      
      export function completeTodo(index) {
        return { type: COMPLETE_TODO, index }
      }
      
      export function setVisibilityFilter(filter) {
        return { type: SET_VISIBILITY_FILTER, filter }
      }