export async function fetchAvaliableMeals() {
	const response = await fetch('http://localhost:3000/meals');
	const responseData = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch available meals. Please try again later.');
	}

	return responseData;
}
