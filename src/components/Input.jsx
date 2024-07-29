export default function Input({ id, label, hasError, width = 'w-7/12', ...props }) {
	return (
		<div className="flex flex-col gap-1">
			<label className="text-xl font-bold tracking-tight" htmlFor={id}>
				{label}
			</label>
			<input
				id={id}
				{...props}
				className={`shadow-md ${width} text-lg font-medium p-2 rounded-lg ${
					hasError && 'border border-red-300 bg-red-100'
				}`}
			/>
			{hasError && <p className="text-red-500">Please enter a valid value</p>}
		</div>
	);
}
