import { useState, createContext } from 'react';
import Header from './components/Header.jsx';
import MealsMenu from './components/MealsMenu.jsx';

export const CartContext = createContext({
	userCart: [],
	handleAddToCart: () => {},
	handleRemoveFromCart: () => {},
});

function App() {
	const [userCart, setUserCart] = useState([]);

	const contextValue = {
		userCart,
		handleAddToCart,
		handleRemoveFromCart,
	};

	const handleAddToCart = dish => {
		setUserCart(prevCart => {
			const updatedCart = prevCart.map(item => {
				if (item.id === dish.id) {
					return { ...item, quantity: item.quantity + 1 };
				} else {
					return item;
				}
			});

			if (!updatedCart.find(item => item.id === dish.id)) {
				updatedCart.push({ id: dish.id, quantity: 1 });
			}

			return updatedCart;
		});
	};

	const handleRemoveFromCart = dish => {
		setUserCart(prevCart => {
			const updatedCart = prevCart.map(item => {
				if (item.id === dish.id) {
					return { ...item, quantity: item.quantity - 1 };
				} else {
					return item;
				}
			});

			return updatedCart.filter(item => item.quantity > 0);
		});
	};

	return (
		<CartContext.Provider value={contextValue}>
			<Header />
			<MealsMenu />
		</CartContext.Provider>
	);
}

export default App;
