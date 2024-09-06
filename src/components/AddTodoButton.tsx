import { useContext } from 'react';
import {
	InputTextContext,
	InputTextContextType,
	TodosContext,
	TodosContextType,
} from '../App';

export default function AddTodoButton() {
	const { todos, setTodos } = useContext(TodosContext) as TodosContextType;
	const { inputText, setInputText } = useContext(
		InputTextContext
	) as InputTextContextType;

	const addTodo = () => {
		if (inputText.trim().length) {
			setTodos([
				...todos,
				{
					id: new Date().toISOString(),
					text: inputText,
					completed: false,
				},
			]);
		}
		setInputText('');
	};

	return (
		<button className='border-2 border-black px-4' onClick={addTodo}>
			Add
		</button>
	);
}
