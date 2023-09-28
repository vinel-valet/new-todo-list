export interface Todo {
    id: string;
    description: string;
    dateAdded: string;
}

export type TodoAction =
    | { type: 'ADD_TODO'; payload: { description: string } }
    | { type: 'EDIT_TODO'; payload: { id: string; description: string } }
    | { type: 'DELETE_TODO'; payload: { id: string } };

export type TodoState = Todo[];