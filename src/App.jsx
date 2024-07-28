import { useState, createContext } from 'react';
import Header from './components/Header.jsx';
import MealsMenu from './components/MealsMenu.jsx';
import Modal from './components/Modal.jsx';

export const CartContext = createContext({
	userCart: [],
	isModalShown: false,
	handleToggleModal: () => {},
	handleAddToCart: () => {},
	handleRemoveFromCart: () => {},
});

function App() {
	const [userCart, setUserCart] = useState([]);
	const [isModalShown, setIsModalShown] = useState(false);

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

	const handleToggleModal = () => {
		console.log('changed modal');
		setIsModalShown(prevModal => !prevModal);
	};

	const contextValue = {
		userCart,
		isModalShown,
		handleToggleModal,
		handleAddToCart,
		handleRemoveFromCart,
	};

	return (
		<CartContext.Provider value={contextValue}>
			<Header />
			<MealsMenu />
			<Modal label="Your Cart" buttonName="Go to Checkout"></Modal>
		</CartContext.Provider>
	);
}

export default App;
