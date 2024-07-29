import useInput from '../hooks/use-input';
import { isEmail, isNotEmpty } from '../util/validation';
import Input from './Input';

export default function Checkout() {
	const {
		enetedValue: eneterdName,
		hasError: nameHasError,
		handleInputChange: handleNameChange,
		handleInputBlur: handleNameBlur,
	} = useInput('', isNotEmpty);

	const {
		enetedValue: eneterdEmail,
		hasError: emailHasError,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
	} = useInput('', value => isNotEmpty(value) && isEmail(value));

	const {
		enetedValue: eneterdStreet,
		hasError: streetHasError,
		handleInputChange: handleStreetChange,
		handleInputBlur: handleStreetBlur,
	} = useInput('', isNotEmpty);

	const {
		enetedValue: eneterdPostCode,
		hasError: postCodeHasError,
		handleInputChange: handlePostCodeChange,
		handleInputBlur: handlePostCodeBlur,
	} = useInput('', isNotEmpty);

	const {
		enetedValue: eneterdCity,
		hasError: cityHasError,
		handleInputChange: handleCityChange,
		handleInputBlur: handleCityBlur,
	} = useInput('', isNotEmpty);

	return (
		<div className="flex flex-col gap-5 pb-6">
			<p className="text-lg pt-4">Total Amount: $89.45</p>

			<Input
				id="full-name"
				label="Full Name"
				name="full-name"
				type="text"
				value={eneterdName}
				hasError={nameHasError}
				onChange={handleNameChange}
				onBlur={handleNameBlur}
			/>

			<Input
				id="email"
				label="E-Mail Address"
				name="email"
				type="email"
				value={eneterdEmail}
				hasError={emailHasError}
				onChange={handleEmailChange}
				onBlur={handleEmailBlur}
			/>

			<Input
				id="street"
				label="Street"
				name="street"
				type="text"
				value={eneterdStreet}
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
					value={eneterdPostCode}
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
					value={eneterdCity}
					hasError={cityHasError}
					onChange={handleCityChange}
					onBlur={handleCityBlur}
					width="w-full"
				/>
			</div>
		</div>
	);
}
