export default function Input({ id, label, hasError, ...props }) {
	return (
		<div>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
			{hasError && <p className="text-red-500">Please enter a valid value</p>}
		</div>
	);
}
