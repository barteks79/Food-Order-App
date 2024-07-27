import { fetchAvaliableMeals } from '../http';
import Dish from './Dish';

export default function MealsMenu() {
	return (
		<main className="flex flex-wrap justify-center gap-8 pb-24">
			<Dish />
		</main>
	);
}
