import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button, Modal, Input } from 'antd';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { RootState } from '../store/store';
import { addTodo, editTodo, deleteTodo } from '../actions/todoActions';

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editTodoId, setEditTodoId] = useState<string>('');
    const [newTaskDescription, setNewTaskDescription] = useState<string>('');

    const handleAddTodo = (description: string) => {
        if (description.trim() !== '') {
            dispatch(addTodo(description));
            setNewTaskDescription('');
        }
    };

    const handleEditTodo = (id: string, description: string) => {
        dispatch(editTodo(id, description));
        setEditModalVisible(false);
    };

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    };

    const showEditModal = (id: string) => {
        setEditTodoId(id);
        setEditModalVisible(true);
    };

    const hideEditModal = () => {
        setEditTodoId('');
        setEditModalVisible(false);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <Input
                type="text"
                placeholder="Enter task description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
            />
            <Button onClick={() => handleAddTodo(newTaskDescription)}>Add Task</Button>

            <List
                dataSource={todos}
                renderItem={(todo) => (
                    <TodoItem
                        todo={todo}
                        onEdit={() => showEditModal(todo.id)}
                        onDelete={() => handleDeleteTodo(todo.id)}
                    />
                )}
            />

            <Modal
                title="Edit Task"
                open={editModalVisible}
                onCancel={hideEditModal}
                footer={null}
            >
                <TodoForm
                    initialValue={todos.find((todo) => todo.id === editTodoId)?.description || ''}
                    onSubmit={(description) => handleEditTodo(editTodoId || '', description)}
                />
            </Modal>
        </div>
    );
};

export default TodoList;