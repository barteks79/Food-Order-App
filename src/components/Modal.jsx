import { useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CartContext } from '../App';
import Button from './Button';
import Cart from './Cart';
import Checkout from './Checkout';
import useHttp from '../hooks/use-http';

const requestConfig = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
};

export default function Modal() {
	const [inputValues, setInputValues] = useState({});
	const { userCart, modalData, handleToggleModal, handleModalSectionChange } = useContext(CartContext);
	const dialog = useRef();

	const { isLoading, error, sendRequest } = useHttp('http://localhost:3000/orders', requestConfig);

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
		dialog.current.close();
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

				{modalData.section === 'cart' ? <Cart /> : <Checkout handleChangeValues={handleChangeValues} />}

				<div className="flex justify-end gap-2">
					<button className="text-lg px-5" onClick={() => dialog.current.close()}>
						<p>Close</p>
					</button>

					<Button onButtonClick={modalData.section === 'cart' ? handleModalSectionChange : handleSubmitOrder}>
						<p>{modalData.section === 'cart' ? 'Go to Checkout' : 'Submit Order'}</p>
					</Button>
				</div>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
}
