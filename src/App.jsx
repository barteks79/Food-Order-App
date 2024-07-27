import { useState, createContext } from 'react';
import Header from './components/Header.jsx';
import MealsMenu from './components/MealsMenu.jsx';

export const CartContext = createContext({
	userCart: [],
	handleAddToCart: () => {},
});

function App() {
	const [userCart, setUserCart] = useState([]);

	const contextValue = {
		userCart,
		handleAddToCart,
	};

	function handleAddToCart(dish) {
		setUserCart(prevCart => {
			const prevQuantity = +prevCart.find(item => item.dish.id === dish.id).quantity || 0;
			return [...prevCart, { dish, quantity: prevQuantity + 1 }];
		});
	}

	return (
		<CartContext.Provider value={contextValue}>
			<Header />
			<MealsMenu />
		</CartContext.Provider>
	);
}

export default App;
