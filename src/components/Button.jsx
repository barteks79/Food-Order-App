export default function Button({ arg, children, onButtonClick }) {
	return (
		<button
			onClick={() => onButtonClick(arg)}
			className="py-3 px-6 rounded bg-primary hover:bg-primary-light text-black font-medium">
			{children}
		</button>
	);
}
