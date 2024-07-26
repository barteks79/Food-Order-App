export default function MealsMenu() {
	return (
		<main className="flex justify-center gap-3 columns-3">
			<div className="flex flex-col w-3/12 bg-neutral-900 rounded-xl">
				<img className="rounded-ss-xl rounded-se-xl" src="../backend/public/images/lobster-bisque.jpg" alt="dish" />
				<div className="flex flex-col items-center py-4 gap-2">
					<h2>Meal Name</h2>
					<p>$8.99</p>
					<p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, commodi!</p>
					<button>Add to Cart</button>
				</div>
			</div>
		</main>
	);
}
