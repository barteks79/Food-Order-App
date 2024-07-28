import { useContext } from 'react';
import { CartContext } from '../App';
import Button from './Button';

export default function Dish({ mealData, name, price, description, image }) {
	const { handleAddToCart } = useContext(CartContext);

	return (
		<div className="flex flex-col w-3/12 bg-neutral-900 rounded-xl shadow-3xl">
			<img className="rounded-ss-xl rounded-se-xl" src={`http://localhost:3000/${image}`} alt="Dish image" />
			<div className="flex flex-col items-center pt-4 pb-8 gap-2 text-white">
				<h2 className="text-2xl font-semibold pb-1">{name}</h2>
				<p className="rounded-md text-primary font-medium px-10 py-2 bg-secondary text-lg">${price}</p>
				<p className="pt-3 pb-5 px-6 text-center text-lg h-36">{description}</p>
				<Button arg={mealData} onButtonClick={handleAddToCart}>
					<p className="text-xl">Add to Cart</p>
				</Button>
			</div>
		</div>
	);
}
