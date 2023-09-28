import { ADD_TODO, EDIT_TODO, DELETE_TODO } from '../actions/actionTypes';
import { TodoAction, TodoState } from '../types/todoTypes';

const initialState: TodoState = [];

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: Date.now().toString(),
                    description: action.payload.description,
                    dateAdded: new Date().toLocaleString(),
                },
            ];
        case EDIT_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? {
                        ...todo,
                        description: action.payload.description,
                        dateAdded: new Date().toLocaleString(),
                    }
                    : todo
            );
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
};

export default todoReducer;