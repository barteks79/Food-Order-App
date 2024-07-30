export default function Error({ title, message }) {
	return (
		<div className="flex flex-col items-center gap-5 pt-20 text-white">
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="text-xl">{message}</p>
		</div>
	);
}
