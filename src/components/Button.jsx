import { useContext } from 'react';
import { CartContext } from '../App';

export default function Button({ meal, children }) {
	const { handleAddToCart } = useContext(CartContext);

	return (
		<button
			onClick={() => handleAddToCart(meal)}
			className="py-3 px-6 rounded bg-primary hover:bg-primary-light text-black font-medium">
			{children}
		</button>
	);
}
