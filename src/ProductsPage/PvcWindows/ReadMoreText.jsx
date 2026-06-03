import { useState } from 'react';

export default function ReadMoreText({ text, simvol }) {
	const [showMore, setShowMore] = useState(false);
	const searchIndex = text.indexOf(simvol);

	const resultText = searchIndex !== -1 ? text.slice(0, searchIndex) : text;

	return (
		<div>
			<div>{showMore ? text : resultText}</div>

			<button onClick={() => setShowMore(!showMore)}>
				{showMore ? 'Скрыть' : 'Читать далие'}
			</button>
		</div>
	);
}
