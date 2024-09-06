export default function TodoItem() {
	return (
		<div className='flex gap-4'>
			<input type='checkbox' />
			<p>text</p>
			<span className='text-red-600'>&#215;</span>
		</div>
	);
}
