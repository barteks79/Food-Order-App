export default function Header() {
	return (
		<header className="flex justify-between items-center py-24">
			<div className="flex items-center gap-8">
				<img className="border-4 border-primary rounded-full h-28" src="../src/assets/logo.jpg" alt="reactfood logo" />
				<h1 className="text-primary uppercase font-semibold text-4xl tracking-wide">reactfood</h1>
			</div>
			<button className="py-4 px-6 rounded hover:bg-primary transition-colors duration-150 ease-in-out">
				<p className="text-2xl text-white font-medium">Cart (3)</p>
			</button>
		</header>
	);
}
