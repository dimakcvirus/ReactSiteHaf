import styled from 'styled-components';

const ServiceContainer = ({ className, mass }) => {
	return (
		<div className={className}>
			{mass.map((pvh) => (
				<div key={pvh.id} className="cont">
					<div>
						<div>
							<img src={pvh.img} />
						</div>
					</div>
					<div>
						<div className="test">
							<div>
								<h6>{pvh.text}</h6>
							</div>
							<div className="details">
								<a>
									<span>ПОДРОБНЕЕ</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
			<button className="all_services">Все услуги</button>
		</div>
	);
};

export const Service = styled(ServiceContainer)`
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	width: 1170px;
	gap: 20px;

	.cont {
		width: 360px;
	}
	.test {
		background-color: #fff;
		color: #29293a;
		text-align: center;
		font-size: 28px;
		padding: 20px;
	}
	.test h6 {
		margin: 0;
	}
	img {
		display: block;
		width: 100%;
	}
	.all_services {
		background-color: #0c54a0;
		font-size: 34px;
		color: #fff;
		width: 268px;
		height: 74px;
		margin: 0 auto;
		transition: background-color 0.3s ease;
	}
	.all_services:hover {
		background-color: #fff;
		color: #0c54a0;
		border-color: #0c54a0;
	}

	.test span {
		font-family: 'PT Sans Narrow';
		font-style: normal;
		font-weight: 700;
		line-height: 40px;
		font-size: 26px;
		letter-spacing: 4px;
		color: #0c54a0;
	}
	.details {
		margin: 10px 0 0 0;
		transition: background-color 0.3s ease;
	}

	.details:hover {
		background-color: #0c54a0;
	}

	.details:hover span {
		color: #fff; /* Белый цвет текста */
	}
`;
