import { useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CartContext } from '../App';
import Button from './Button';

export default function Modal({ label, children, buttonName }) {
	const { isModalShown, handleToggleModal } = useContext(CartContext);
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;

		isModalShown && modal.showModal();
		return () => modal.close();
	}, [isModalShown]);

	return createPortal(
		<dialog onClose={handleToggleModal} ref={dialog}>
			<h1>{label}</h1>
			{children}
			<div>
				<button onClick={() => dialog.current.close()}>
					<p>Close</p>
				</button>
				<Button>
					<p>{buttonName}</p>
				</Button>
			</div>
		</dialog>,
		document.getElementById('modal')
	);
}
