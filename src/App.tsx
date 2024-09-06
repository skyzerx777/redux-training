import './App.css';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import TodoList from './components/TodoList';
function App() {
	return (
		<div className='container flex flex-col justify-center gap-8 m-auto p-8'>
			<div className='flex justify-center gap-4'>
				<AddTodoInput />
				<AddTodoButton />
			</div>
			<TodoList />
		</div>
	);
}

export default App;
