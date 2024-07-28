import useFetch from '../hooks/use-fetch';
import { fetchAvailableMeals } from '../http';
import Dish from './Dish';

export default function MealsMenu() {
	const { isFetching, userData: availableMeals, error } = useFetch(fetchAvailableMeals, []);

	return (
		<main className="flex flex-wrap justify-center gap-8 pb-24">
			{isFetching && <p className="pt-96 text-xl text-white">Loading avaliable meals...</p>}
			{!isFetching && availableMeals.length === 0 && <p className="pt-96 text-xl text-white">Failed to fetch data.</p>}
			{!isFetching && availableMeals.map(meal => <Dish key={meal.id} mealData={meal} {...meal} />)}
		</main>
	);
}
