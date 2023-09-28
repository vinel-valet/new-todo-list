import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;
