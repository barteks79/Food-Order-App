import { useContext, useEffect } from 'react';
import { CartContext } from '../App';
import { currencyFormatter } from '../utils/currency';
import useInput from '../hooks/use-input';
import { isEmail, isNotEmpty } from '../utils/validation';
import Input from './Input';

export default function Checkout({ handleChangeValues }) {
	const { userCart } = useContext(CartContext);
	const totalPrice = userCart.reduce((acc, item) => acc + item.price * item.quantity, 0);

	const {
		enteredValue: name,
		hasError: nameHasError,
		handleInputChange: handleNameChange,
		handleInputBlur: handleNameBlur,
	} = useInput('', isNotEmpty);

	const {
		enteredValue: email,
		hasError: emailHasError,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
	} = useInput('', value => isNotEmpty(value) && isEmail(value));

	const {
		enteredValue: street,
		hasError: streetHasError,
		handleInputChange: handleStreetChange,
		handleInputBlur: handleStreetBlur,
	} = useInput('', isNotEmpty);

	const {
		enteredValue: postalCode,
		hasError: postCodeHasError,
		handleInputChange: handlePostCodeChange,
		handleInputBlur: handlePostCodeBlur,
	} = useInput('', isNotEmpty);

	const {
		enteredValue: city,
		hasError: cityHasError,
		handleInputChange: handleCityChange,
		handleInputBlur: handleCityBlur,
	} = useInput('', isNotEmpty);

	useEffect(
		() => handleChangeValues({ name, email, street, postalCode, city }),
		[name, email, street, postalCode, city]
	);

	return (
		<form className="flex flex-col gap-5 pb-6">
			<p className="text-lg pt-4">Total Amount: {currencyFormatter.format(totalPrice)}</p>

			<Input
				id="full-name"
				label="Full Name"
				name="full-name"
				type="text"
				value={name}
				hasError={nameHasError}
				onChange={handleNameChange}
				onBlur={handleNameBlur}
			/>

			<Input
				id="email"
				label="E-Mail Address"
				name="email"
				type="email"
				value={email}
				hasError={emailHasError}
				onChange={handleEmailChange}
				onBlur={handleEmailBlur}
			/>

			<Input
				id="street"
				label="Street"
				name="street"
				type="text"
				value={street}
				hasError={streetHasError}
				onChange={handleStreetChange}
				onBlur={handleStreetBlur}
			/>

			<div className="flex gap-8">
				<Input
					id="postal-code"
					label="Postal Code"
					name="postal-code"
					type="text"
					value={postalCode}
					hasError={postCodeHasError}
					onChange={handlePostCodeChange}
					onBlur={handlePostCodeBlur}
					width="w-full"
				/>

				<Input
					id="city"
					label="City"
					name="city"
					type="text"
					value={city}
					hasError={cityHasError}
					onChange={handleCityChange}
					onBlur={handleCityBlur}
					width="w-full"
				/>
			</div>
		</form>
	);
}
