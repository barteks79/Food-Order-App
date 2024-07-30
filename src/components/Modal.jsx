import { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CartContext } from '../App';
import Button from './Button';
import Cart from './Cart';
import Checkout from './Checkout';
import useHttp from '../hooks/use-http';
import Error from './Error';

const requestConfig = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
};

export default function Modal() {
	const [inputValues, setInputValues] = useState({});
	const { userCart, modalData, handleToggleModal, handleModalSectionChange, resetUserCart } = useContext(CartContext);
	const dialog = useRef();

	const { data, setData, isLoading, error, setError, sendRequest } = useHttp(
		'http://localhost:3000/orders',
		requestConfig
	);

	const onCloseButtonClick = () => {
		dialog.current.close();
		handleModalSectionChange('cart');
		setError();
		setData();
	};

	const handleChangeValues = values => {
		setInputValues({
			...values,
		});
	};

	const handleSubmitOrder = () => {
		const orderData = JSON.stringify({
			order: {
				items: [...userCart],
				customer: {
					...inputValues,
				},
			},
		});

		sendRequest(orderData);
		resetUserCart();
	};

	useEffect(() => {
		const modal = dialog.current;

		modalData.isShown && modal.showModal();
		return () => modal.close();
	}, [modalData.isShown]);

	const modalClass = modalData.isShown ? 'flex justify-center items-center h-full bg-transparent w-full' : '';

	return createPortal(
		<dialog className={modalClass} onClose={handleToggleModal} ref={dialog}>
			<div className="bg-light-grey w-1/3 rounded-lg shadow-3xl py-10 px-10">
				<h1 className="text-2xl font-bold">{modalData.section === 'cart' ? 'Your Cart' : 'Checkout'}</h1>

				{!data && modalData.section === 'cart' && <Cart />}
				{!data && modalData.section === 'checkout' && <Checkout handleChangeValues={handleChangeValues} />}
				{data && !error && <p className="text-xl text-center font-medium py-8">Order submitted successfully!</p>}

				{error && (
					<Error textColor="black" title="Failed to submit order" message={error}>
						{error}
					</Error>
				)}

				{isLoading && <p className="text-xl text-end font-medium pt-8">Sending order...</p>}
				{!isLoading && (
					<div className="flex justify-end gap-2">
						<button className="text-lg px-5" onClick={onCloseButtonClick}>
							<p>Close</p>
						</button>

						{!data && (
							<Button
								onButtonClick={modalData.section === 'cart' ? () => handleModalSectionChange('checkout') : handleSubmitOrder}>
								<p>{modalData.section === 'cart' ? 'Go to Checkout' : 'Submit Order'}</p>
							</Button>
						)}
					</div>
				)}
			</div>
		</dialog>,
		document.getElementById('modal')
	);
}
