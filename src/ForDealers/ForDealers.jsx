import styled from 'styled-components';
import { Header } from '../Header/Header';

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
					<p>
						Для более подробной информации о сотрудничестве отправьте заявку
						на почту
					</p>
					<p>ayzatulova_la@tdhafner.ru</p>
					<h5>Построй стабильный бизнес вместе с нами!</h5>
				</div>
			</div>
		</>
	);
};

export const ForDealers = styled(ForDealersComponents)`
	width: 1170px;
	height: 834px;
	margin: auto;
	.fw-heading-center {
		display: flex;
		justify-content: center;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.fw-special-title {
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 400;
		font-size: 60px;
		line-height: 65px;
		letter-spacing: 5px;
		color: #29293a;
	}
	.fw-text-box {
		width: 1055px;
	}
	.strong {
		font-weight: bold;
		margin-bottom: 10px;
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 700;
		line-height: 28px;
		font-size: 18px;
		letter-spacing: 2px;
		color: #29293a;
	}
`;
