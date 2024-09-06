import './App.css';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import TodoList from './components/TodoList';
function App() {
	return (
		<div className='container m-auto'>
			<div>
				<AddTodoInput />
				<AddTodoButton />
			</div>
			<TodoList />
		</div>
	);
}

export default App;
