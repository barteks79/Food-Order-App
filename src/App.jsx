import { useState, createContext } from 'react';
import Header from './components/Header.jsx';
import MealsMenu from './components/MealsMenu.jsx';
import Modal from './components/Modal.jsx';

export const CartContext = createContext({
	userCart: [],
	modalData: {},
	handleToggleModal: () => {},
	handleModalSectionChange: () => {},
	handleAddToCart: () => {},
	handleRemoveFromCart: () => {},
	handleChangeQuantity: () => {},
	resetUserCart: () => {},
});

function App() {
	const [userCart, setUserCart] = useState([]);
	const [modalData, setModalData] = useState({
		isShown: false,
		section: 'cart',
	});

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
				updatedCart.push({ id: dish.id, name: dish.name, price: +dish.price, quantity: 1 });
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
		setModalData(prevModal => {
			return { isShown: !prevModal.isShown, section: 'cart' };
		});
	};

	const handleModalSectionChange = section => {
		setModalData(prevModal => {
			return { ...prevModal, section };
		});
	};

	const handleChangeQuantity = (dish, quantity) => {
		setUserCart(prevCart => {
			const updatedCart = prevCart.map(item => {
				if (item.id === dish.id) {
					return { ...item, quantity: item.quantity + quantity };
				} else {
					return item;
				}
			});

			return updatedCart.filter(item => item.quantity > 0);
		});
	};

	const resetUserCart = () => {
		setUserCart([]);
	};

	const contextValue = {
		userCart,
		modalData,
		handleToggleModal,
		handleModalSectionChange,
		handleAddToCart,
		handleRemoveFromCart,
		handleChangeQuantity,
		resetUserCart,
	};

	return (
		<CartContext.Provider value={contextValue}>
			<Header />
			<MealsMenu />
			<Modal />
		</CartContext.Provider>
	);
}

export default App;
