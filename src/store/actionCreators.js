import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value: value,
  }
}

export const getAddTodoItemAction = () => {
  return {
    type: ADD_TODO_ITEM,
  }
}

export const getDeleteTodoItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index: index
  }
}

export const initListAction = (data) => {
  return {
    type: INIT_LIST_ACTION,
    data: data
  }
}
