import { useState } from 'react';
import { Input, Button } from 'antd';

interface TodoFormProps {
    initialValue: string;
    onSubmit: (description: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ initialValue, onSubmit }) => {
    const [description, setDescription] = useState(initialValue);

    const handleSubmit = () => {
        onSubmit(description);
        setDescription('');
    };

    return (
        <div>
            <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task description"
            />
            <Button onClick={handleSubmit}>Save</Button>
        </div>
    );
};

export default TodoForm;