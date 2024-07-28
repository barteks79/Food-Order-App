import { useContext } from 'react';
import { CartContext } from '../App';
import CartButtons from './CartButtons';
import { currencyFormatter } from '../util/util';

export default function Cart() {
	const { userCart } = useContext(CartContext);

	if (userCart.length === 0) {
		return <p className="text-xl text-center font-medium py-8">Cart is empty</p>;
	}

	return (
		<div className="flex flex-col gap-2 py-6">
			{userCart.map(item => (
				<div key={item.id} className="flex justify-between">
					<label className="text-lg font-medium">
						{item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
					</label>
					<CartButtons itemToChange={item} quantitity={item.quantity} />
				</div>
			))}
		</div>
	);
}
