import { useState, useEffect } from 'react';

export default function useFetch(fetchFunction, initialValue) {
	const [isFetching, setIsFetching] = useState(false);
	const [userData, setUserData] = useState(initialValue);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);
			try {
				const data = await fetchFunction();
				setUserData(data);
			} catch (error) {
				setError({ message: error.message || 'Failed to fetch data.' });
			}
			setIsFetching(false);
		}
		fetchData();
	}, [fetchFunction]);

	return { isFetching, userData, setUserData, error };
}
