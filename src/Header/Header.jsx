import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../public/logo.png';
import vk from '../../public/vk.png';
import ok from '../../public/ok.svg';
import calculate from '../../public/calculate.png';
import measuring from '../../public/z.png';
import { ProductUslug } from '../ProductUslug/ProductUslug';

export const Header = () => {
	return (
		<HeaderWrapper>
			{/* верхняя часть */}
			<div className="container">
				{/* top */}
				<div className="header__top">
					<div className="header__social">
						<img src={vk} className="icon icon--social icon--invert" />
						<img src={ok} className="icon icon--social" />
					</div>
				</div>

				{/* main */}
				<div className="header__main">
					<Link to="/">
						<img src={logo} className="header__logo" />
					</Link>
					<div className="header__actions">
						<div className="header__phone">+7 (4722) 50-55-33</div>

						<div className="header__action">
							<img src={calculate} className="icon icon--large" />
							<span>Рассчитать стоимость</span>
						</div>

						<div className="header__action">
							<img src={measuring} className="icon icon--large" />
							<span>Бесплатный замер</span>
						</div>
					</div>
				</div>
			</div>

			{/* красная линия на всю ширину */}
			<div className="header__nav-line"></div>

			{/* навигация внутри отдельного контейнера */}
			<div className="container">
				<nav className="header__nav-list">
					<Link to="/company" className="no-style-link">
						<span className="header__nav-item">О компании</span>
					</Link>
					<Link to="ProductUslug" className="no-style-link">
						<span className="header__nav-item">Продукция и услуги</span>
					</Link>

					<Link to="" className="no-style-link">
						<span className="header__nav-item">Для партнеров</span>
					</Link>
					<Link to="" className="no-style-link">
						<span className="header__nav-item">Для дилеров</span>
					</Link>
					<Link to="" className="no-style-link">
						<span className="header__nav-item">Акции</span>
					</Link>
					<Link to="" className="no-style-link">
						<span className="header__nav-item">Партнеры</span>
					</Link>
					<Link to="" className="no-style-link">
						<span className="header__nav-item">Контакты</span>
					</Link>
				</nav>
			</div>
		</HeaderWrapper>
	);
};

export const HeaderWrapper = styled.header`
	background: #29293a;
	color: #fff;

	.no-style-link {
		text-decoration: none;
		color: inherit;
	}
	/* контейнер */
	.container {
		max-width: 1170px;
		margin: 0 auto;
		padding: 0 20px; /* отступы слева/справа */
	}

	.icon {
		width: 30px;
		height: 30px;
	}

	.icon--large {
		width: 50px;
		height: 50px;
	}

	.icon--invert {
		filter: brightness(0) invert(1);
	}

	/* top */
	.header__top {
		display: flex;
		justify-content: flex-end;
		padding: 12px 0;
	}

	.header__social {
		display: flex;
		gap: 10px;
	}

	/* main */
	.header__main {
		display: flex;
		align-items: center;
		padding: 20px 0;
	}

	.header__logo {
		width: 192px;
		height: auto;
	}

	.header__actions {
		display: flex;
		align-items: center;
		gap: 40px;
		margin-left: auto;
	}

	.header__phone {
		font-size: 28px;
		font-weight: 500;
		margin-right: 40px; /* сдвигаем левее остальных */
	}

	.header__action {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		font-size: 14px;
		max-width: 140px;
	}

	/* красная линия */
	.header__nav-line {
		width: 100%;
		height: 3px;
		background-color: red;
	}

	/* навигация */
	.header__nav-list {
		display: flex;
		justify-content: space-between;
		padding: 12px 0;
		font-size: 16px;
		text-transform: uppercase;
	}

	.header__nav-item {
		cursor: pointer;
		white-space: nowrap;
	}

	.header__nav-item:hover {
		opacity: 0.8;
	}
`;
