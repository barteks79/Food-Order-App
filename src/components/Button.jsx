export default function Button({ children }) {
	return (
		<button className="py-3 px-6 rounded bg-primary hover:bg-primary-light text-black font-medium">
			{children}
		</button>
	);
}
