import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CartContext } from '../App';
import Button from './Button';

export default function Modal({ label, children, buttonName }) {
	const { modalData, handleToggleModal, handleModalSectionChange } = useContext(CartContext);
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;

		modalData.isShown && modal.showModal();
		return () => modal.close();
	}, [modalData.isShown]);

	const modalClass = modalData.isShown ? 'flex justify-center items-center h-full bg-transparent w-full' : '';

	return createPortal(
		<dialog className={modalClass} onClose={handleToggleModal} ref={dialog}>
			<div className="bg-light-grey w-1/3 rounded-lg shadow-3xl py-10 px-10">
				<h1 className="text-2xl font-bold">{label}</h1>
				{children}
				<div className="flex justify-end gap-2">
					<button className="text-lg px-5" onClick={() => dialog.current.close()}>
						<p>Close</p>
					</button>
					<Button onButtonClick={modalData.section === 'cart' ? handleModalSectionChange : ''}>
						<p>{buttonName}</p>
					</Button>
				</div>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
}
