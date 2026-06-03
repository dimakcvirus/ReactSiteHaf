import styled from 'styled-components';
import { Service } from './Service';

const ServicesContainer = ({ className }) => {
	const mass = [
		{
			id: 1,
			img: '../../public/Services/Бесплатный_замер_окон.jpg',
			text: 'Бесплатный замер окон',
		},
		{
			id: 2,
			img: '../../public/Services/Остеклене_балконов_и_лоджий.jpg',
			text: 'Остеклений балконов и лоджий',
		},
		{
			id: 3,
			img: '../../public/Services/Изготовление_окон_на_заказ.jpg',
			text: 'Изготовление окон на заказ',
		},
		{
			id: 4,
			img: '../../public/Services/Моннтаж_по_ГОСТУ.jpeg',
			text: 'Монтаж по ГОСТУ',
		},
		{
			id: 5,
			img: '../../public/Services/Отделка_откосов.jpg',
			text: 'Отделка откосов',
		},
		{
			id: 6,
			img: '../../public/Services/Заммена_и_установка_фурнитуры.png',
			text: 'Замена и установка фурнитуры',
		},
	];
	return (
		<div className={className}>
			<div className="services_text">
				<h3>НАШИ УСЛУГИ</h3>
			</div>
			<Service mass={mass} />
		</div>
	);
};

export const Services = styled(ServicesContainer)`
	padding: 40px 0;
	margin: 0;

	.services_text {
		text-align: center;
		margin-bottom: 30px;
	}

	.services_text h3 {
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 44px;
		text-transform: uppercase;
		color: #222938;
		margin: 0;
	}
`;
