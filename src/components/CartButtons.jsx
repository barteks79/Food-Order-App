import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export default function CartButtons() {
	return (
		<div className="flex items-center gap-6">
			<button className="flex items-center justify-center text-primary text-xl h-10 w-10 bg-zinc-800 rounded-full">
				<FontAwesomeIcon icon={faMinus} />
			</button>
			<p className="text-xl font-semibold">1</p>
			<button className="flex items-center justify-center text-primary text-xl h-10 w-10 bg-zinc-800 rounded-full">
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
}
