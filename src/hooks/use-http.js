import { useEffect, useState, useCallback } from 'react';

async function sendHttpRequest(url, config) {
	const response = await fetch(url, config);
	const responseData = await response.json();

	if (!response.ok) {
		throw new Error(response.message || 'Something went wrong! Failed to send request.');
	}

	return responseData;
}

export default function useHttp(url, config, initialData) {
	const [data, setData] = useState(initialData);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const sendRequest = useCallback(
		async function sendRequest(data) {
			setIsLoading(true);
			try {
				const responseData = await sendHttpRequest(url, { ...config, body: data });
				setData(responseData);
			} catch (error) {
				setError(error.message || 'Something went wrong! Failed to send request.');
			}
			setIsLoading(false);
		},
		[url, config]
	);

	useEffect(() => {
		if ((config && config.method === 'GET') || !config.method || !config) {
			sendRequest();
		}
	}, [sendRequest, config]);

	return { data, setData, isLoading, error, setError, sendRequest };
}
