import { Provider } from 'react-redux';
import './App.css';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import TodoList from './components/TodoList';
import { store } from './store/store';
function App() {
	return (
		<Provider store={store}>
			<div className='container flex flex-col justify-center gap-8 m-auto p-8'>
				<div className='flex justify-center gap-4'>
					<AddTodoInput />
					<AddTodoButton />
				</div>
				<TodoList />
			</div>
		</Provider>
	);
}

export default App;
