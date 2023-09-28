import { List, Button } from 'antd';
import { Todo } from '../types/todoTypes';

interface TodoItemProps {
    todo: Todo;
    onEdit: () => void;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit, onDelete }) => {
    return (
        <List.Item
            actions={[
                <Button type="link" onClick={onEdit}>
                    Edit
                </Button>,
                <Button type="link" onClick={onDelete}>
                    Delete
                </Button>,
            ]}
        >
            <div className="item-list">
                <div className="description">{todo.description}</div>
                <div className="date">{todo.dateAdded}</div>
            </div>
        </List.Item>
    );
};

export default TodoItem;