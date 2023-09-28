import { ADD_TODO, EDIT_TODO, DELETE_TODO } from './actionTypes';

export const addTodo = (description: string) => ({
    type: ADD_TODO,
    payload: { description },
});

export const editTodo = (id: string, description: string) => ({
    type: EDIT_TODO,
    payload: { id, description },
});

export const deleteTodo = (id: string) => ({
    type: DELETE_TODO,
    payload: { id },
});
