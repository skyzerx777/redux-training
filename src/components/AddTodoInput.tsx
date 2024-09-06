type PropsType = {
	inputText: string;
	setInputText: React.Dispatch<React.SetStateAction<string>>;
};
export default function AddTodoInput({ inputText, setInputText }: PropsType) {
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
	};

	return (
		<label className='flex gap-4'>
			<span>Enter your task:</span>
			<input
				type='text'
				className='w-48 border-2 border-black px-2'
				value={inputText}
				onChange={handleInput}
			/>
		</label>
	);
}
