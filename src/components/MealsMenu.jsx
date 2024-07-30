import useHttp from '../hooks/use-http.js';
import Dish from './Dish';
import Error from './Error.jsx';

const requestConfig = {};

export default function MealsMenu() {
	const { isLoading, data: availableMeals, error } = useHttp('http://localhost:3000/meals', requestConfig, []);

	if (error) {
		return <Error title="Failed to fetch meals." message={error} />;
	}

	return (
		<main className="flex flex-wrap justify-center gap-8 pb-24">
			{isLoading && <p className="pt-96 text-xl text-white">Loading avaliable meals...</p>}
			{!isLoading && availableMeals.length === 0 && <p className="pt-96 text-xl text-white">Failed to fetch data.</p>}
			{!isLoading && availableMeals.map(meal => <Dish key={meal.id} mealData={meal} {...meal} />)}
		</main>
	);
}
