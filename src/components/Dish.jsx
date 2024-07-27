import Button from './Button';

export default function Dish() {
	return (
		<div className="flex flex-col w-1/4 bg-neutral-900 rounded-xl shadow-3xl">
			<img className="rounded-ss-xl rounded-se-xl" src="../backend/public/images/lobster-bisque.jpg" alt="dish" />
			<div className="flex flex-col items-center pt-4 pb-8 gap-2 text-white">
				<h2 className="text-2xl font-semibold pb-1">Meal Name</h2>
				<p className="rounded-md text-primary font-medium px-10 py-2 bg-secondary text-lg">$8.99</p>
				<p className="pt-3 pb-5 px-6 text-center text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi!
				</p>
				<Button>
					<p className="text-xl">Add to Cart</p>
				</Button>
			</div>
		</div>
	);
}
