import styled from 'styled-components';
import { Header } from '../Header/Header';
import { Podval } from '../Podval/Podval';
import { Galler } from '../Gallery/Galler.jsx';

const ForDealersComponents = ({ className }) => {
	return (
		<>
			<Header />
			<div className={className}>
				<div className="fw-heading-center">
					<h1 className="fw-special-title">Дилерам</h1>
				</div>
				<div className="fw-text-box">
					<p className="strong">
						Наша компания Хафнер не только сама реализует выпускаемые
						светопрозрачные конструкции, мы так же является поставщиками для
						малого и среднего бизнеса.
					</p>
					<p className="strong">Став нашим дилером Вы получаете:</p>
					<ul>
						<li>
							партнеров с мировым именем: Deceuninck, STIS, Roto, Siegenia
							TITAN и т.д.
						</li>
						<li>широкий ассортимент выпускаемой продукции</li>
						<li>
							собственная линия производства позволяет нам в кратчайшие
							сроки изготовить Ваш заказ даже в период высокого сезона
						</li>
						<li>
							четкую и оперативную доставку готовых конструкций в строгом
							соответствии с назначенным сроком
						</li>
						<li>
							персонального менеджера, который обеспечит Вам индивидуальный
							подход, информационную и техническую поддержку
						</li>
						<li>гибкую систему скидок для новичков и постоянных клиентов</li>
						<li>
							бесплатную программу и её обслуживание для расчёта конструкций
						</li>
						<li>бесплатное обучение и корпоративные тренинги</li>
						<li>предоставление методических рекламных материалов</li>
						<li>качественное гарантийное обслуживание</li>
					</ul>
					<p className="info-text">
						Для более подробной информации о сотрудничестве отправьте заявку
						на почту
					</p>
					<a className="email" href="mailto:ayzatulova_la@tdhafner.ru">
						ayzatulova_la@tdhafner.ru
					</a>
					<h5 className="business-title">
						Построй стабильный бизнес вместе с нами!
					</h5>
					<div className="gallery">
						<Galler />
					</div>
				</div>
			</div>
			<Podval />
		</>
	);
};

export const ForDealers = styled(ForDealersComponents)`
	width: 1170px;
	margin: 0 auto;

	.fw-heading-center {
		display: flex;
		justify-content: center;
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.fw-special-title {
		margin: 0;
		font-family: 'Roboto Slab', serif;
		font-style: normal;
		font-weight: 400;
		font-size: 60px;
		line-height: 65px;
		letter-spacing: 5px;
		color: #29293a;
	}

	.fw-text-box {
		width: 1055px;
		margin: 0 auto;
	}

	.strong {
		margin: 0 0 10px;
		font-family: 'Roboto Slab', serif;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 2px;
		color: #29293a;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		position: relative;
		padding-left: 15px;
		list-style: none;

		font-family: 'Roboto Slab', serif;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 2px;
		color: #29293a;
	}

	li::before {
		content: '-';
		position: absolute;
		left: 0;
	}

	.info-text {
		font-family: 'Roboto Slab', serif;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 2px;
		color: #29293a;
		margin: 25px 0 0;
	}

	.email {
		display: inline-block;
		margin-top: 0;

		font-family: 'Roboto Slab', serif;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 2px;

		color: #7ca82b;
		text-decoration: none;
	}
	.business-title {
		margin: 30px 0 0;

		text-align: center;
		font-family: 'Roboto Slab', serif;
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 2px;

		color: #29293a;
	}
	.gallery {
		margin-bottom: 5%;
	}
`;
