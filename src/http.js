export async function fetchAvailableMeals() {
	const response = await fetch('http://localhost:3000/meals');
	const responseData = await response.json();

	if (!response.ok) {
		throw new Error('Failed to fetch available meals. Please try again later.');
	}

	return responseData;
}

export async function submitOrder(order) {
	const response = await fetch('http://localhost:3000/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ order }),
	});
}
