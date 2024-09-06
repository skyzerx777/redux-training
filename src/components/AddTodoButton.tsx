import { TodosType } from '../types/TodosType';
type PropsType = {
	todos: TodosType[];
	setTodos: React.Dispatch<React.SetStateAction<TodosType[]>>;
	inputText: string;
	setInputText: React.Dispatch<React.SetStateAction<string>>;
};
export default function AddTodoButton({
	todos,
	setTodos,
	inputText,
	setInputText,
}: PropsType) {
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
