import { createContext, useState } from 'react';
import './App.css';
import AddTodoButton from './components/AddTodoButton';
import AddTodoInput from './components/AddTodoInput';
import TodoList from './components/TodoList';
import { TodosType } from './types/TodosType';

export type TodosContextType = {
	todos: TodosType[];
	setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
};
export type InputTextContextType = {
	inputText: string;
	setInputText: React.Dispatch<React.SetStateAction<string>>;
};
export const TodosContext = createContext<TodosContextType | null>(null);
export const InputTextContext = createContext<InputTextContextType | null>(
	null
);

function App() {
	const [todos, setTodos] = useState<TodosType[]>([]);
	const [inputText, setInputText] = useState<string>('');
	return (
		<TodosContext.Provider value={{ todos, setTodos }}>
			<div className='container flex flex-col justify-center gap-8 m-auto p-8'>
				<div className='flex justify-center gap-4'>
					<InputTextContext.Provider value={{ inputText, setInputText }}>
						<AddTodoInput />
						<AddTodoButton />
					</InputTextContext.Provider>
				</div>
				<TodoList />
			</div>
		</TodosContext.Provider>
	);
}

export default App;
