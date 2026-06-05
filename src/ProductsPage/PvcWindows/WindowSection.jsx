import { ReadMore } from './ReadMore';

export default function WindowSection({ data, reverse = true, showReadMore = true,}) {
	return data.map((item, index) => (
		<div key={item.title} className={`section ${reverse && index % 2 ? 'reverse' : ''}`}>
			<div className="fw-text-box">
				<h5 className="fw-special-title">{item.title}</h5>
				<div className="fw-text">
					<p>{item.text}</p>

					
					{showReadMore ? (
						<ReadMore width={item.width}>
							<p>{item.hiddenText.text}</p>

							<ul>
								{item.hiddenText.list.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>

							<p>{item.hiddenText.textTwo}</p>
						</ReadMore>
					) : (
						<>
							<p>{item.hiddenText.text}</p>

							<ul>
								{item.hiddenText.list.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>

							<p>{item.hiddenText.textTwo}</p>
						</>
					)}
				</div>
			</div>
			<img src={item.img} alt={item.img} />
		</div>
	));
}
