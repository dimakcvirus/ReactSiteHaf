import styled from 'styled-components';
import { Header } from '../Header/Header';
import imgOne from '../../public/company/logo-1.png';
import imgTwo from '../../public/company/logo_2.png';
import imgThree from '../../public/company/titan_af.jpg';

const CompanyContainer = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<div className="Ocompany">
				<h1> О КОМПАНИИ</h1>
				<div>
					<div className="text_one">
						<p className="fw-text">
							Компания основана в 2002 году. Благодаря постоянному развитию
							и использованию новых технологий, это одна из крупнейших
							компаний по производству и установке оконных изделий из
							пластика и алюминия в Белгороде и Белгородской области. Мы
							представляем широкий ассортимент продукции и услуг различной
							ценовой категории.
						</p>
						<p className="fw-text">
							Завод по производству окон «Хафнер» оснащен полностью
							автоматизированными технологическими линиями. Все окна
							производятся с необходимой точностью, поэтому они долговечны и
							надежны. Завод предоставляет оптимальные гарантийные условия
							на всю продукцию и проведенные услуги от компании «Хафнер».
						</p>
					</div>
					<div className="text_two">
						<p className="fw-text">
							Вы так же можете найти все необходимые комплектующие для
							дальнейшей эксплуатации окон. Компания имеет партнерские
							отношения с крупнейшими международными компаниями
							поставщиков-производителей стеклопакетов, ПВХ-профиля,
							алюминия, фурнитуры. Это позволяет не только оказывать
							населению услуги высокого качества, но и занимать лидирующие
							позиции на рынке оконных технологий.
						</p>
						<div className="imgContainer">
							<img src={imgOne}></img>
							<img src={imgTwo}></img>
							<img src={imgThree}></img>
						</div>
						<p className="fw-text">
							Мы используем передовые технологии производства, чтобы сделать
							вашу жизнь комфортней.
						</p>
						<p className="fw-text">
							Благодаря собственному производству и оказанию услуг по
							продаже и установке окон, цены на наши изделия не зависят от
							наценок дилеров, аренды торговых точек. Приобретайте окна по
							потовым ценам с качеством и гарантией от производителя.
						</p>
						<p className="fw-text">
							Сеть салонов по продаже окон постоянно расширяется. Для
							оформления заказа или более подробного информирования о нашей
							продукции вы можете обратиться в любую точку продаж:
						</p>
						<p className="fw-text">
							Мы всегда рады помочь вам сделать правильный выбор. А чтобы вы
							выбрали нас – мы будем продолжать развиваться и шагать в ногу
							со временем.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const Company = styled(CompanyContainer)`
	.Ocompany {
		text-align: center;
	}
	h1 {
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 400;
		font-size: 60px;
		line-height: 65px;
		letter-spacing: 5px;
		color: #29293a;
		margin: 50px;
	}
	.fw-text {
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 400;
		line-height: 28px;
		font-size: 18px;
		letter-spacing: 2px;
		color: #29293a;
		max-width: 1120px;
		margin: 10px 0 10px 0;
	}
	.text_one {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: left;
	}
	.text_two {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: left;
		margin-top: 100px;
	}
	.imgContainer {
		display: flex;
		align-items: center;
		gap: 30px;
	}
	img {
		width: 300px;
		gap: 10px;
	}
`;
