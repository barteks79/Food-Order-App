import { useContext } from 'react';
import { CartContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function CartButtons({ itemToChange, quantitity }) {
	const { handleChangeQuantity } = useContext(CartContext);

	return (
		<div className="flex items-center justify-between w-28 gap-5">
			<button
				onClick={() => handleChangeQuantity(itemToChange, -1)}
				className="flex items-center justify-center text-primary text-md h-8 w-8 bg-zinc-800 rounded-full">
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<p className="text-lg font-semibold">{quantitity}</p>
			<button
				onClick={() => handleChangeQuantity(itemToChange, 1)}
				className="flex items-center justify-center text-primary text-md h-8 w-8 bg-zinc-800 rounded-full">
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}
