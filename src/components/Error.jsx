export default function Error({ title, message, textColor }) {
	return (
		<div className={`flex flex-col gap-5 py-10 text-${textColor}`}>
			<h2 className="text-2xl font-semibold">{title}</h2>
			<p className="text-xl">{message}</p>
		</div>
	);
}
