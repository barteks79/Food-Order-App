import { useState } from 'react';

export default function useInput(initialValue, validationFn) {
	const [enteredValue, seEnteredValue] = useState(initialValue);
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validationFn(enteredValue);

	const handleInputChange = event => {
		seEnteredValue(event.target.value);
		setIsTouched(false);
	};

	const handleInputBlur = () => {
		setIsTouched(true);
	};

	return {
		enteredValue,
		handleInputChange,
		handleInputBlur,
		hasError: !valueIsValid && isTouched,
	};
}
