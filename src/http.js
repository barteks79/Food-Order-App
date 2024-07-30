export async function submitOrder(order) {
	const response = await fetch('http://localhost:3000/orders', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ order }),
	});
}
