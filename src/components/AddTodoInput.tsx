export default function AddTodoInput() {
	return (
		<label className='flex gap-4'>
			<span>Enter your task:</span>
			<input type='text' className='w-48 border-2 border-black' />
		</label>
	);
}
