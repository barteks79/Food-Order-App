import { useContext } from 'react';
import { CartContext } from '../App';
import Button from './Button';

export default function Header() {
	const { userCart, handleToggleModal } = useContext(CartContext);

	return (
		<header className="flex justify-between items-center py-24">
			<div className="flex items-center gap-8">
				<img className="border-4 border-primary rounded-full h-28" src="../src/assets/logo.jpg" alt="reactfood logo" />
				<h1 className="text-primary uppercase font-semibold text-4xl tracking-wide">reactfood</h1>
			</div>
			<Button onButtonClick={handleToggleModal}>
				<p className="text-2xl">Cart ({userCart.length})</p>
			</Button>
		</header>
	);
}
