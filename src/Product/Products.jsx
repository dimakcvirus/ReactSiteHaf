import styled from 'styled-components';
import { Product } from './Product.jsx';
import { href } from 'react-router-dom';

const ProductsContainer = ({ className }) => {
	const mass = [
		{
			id: 1,
			img: '../../public/./Product/пластиковые-окна.jpg',
			text: 'Пластиковые окна',
			href: '/PvcWindows',
		},
		{ id: 2, img: '../../public/./Product/люминевое.jpg', text: 'Алюминиевые окна',href:'/AluminumWindows' },
		{ id: 3, img: '../../public/./Product/лоджия.jpg', text: 'Балконы и лоджии', href:'/BalconiesLoggias' },
		{ id: 4, img: '../../public/./Product/нестандартное.jpg', text: 'Нестандартные окна', href:'/NonStandartWindows' },
		{
			id: 5,
			img: '../../public/./Product/перегородки-пвх.jpg',
			text: 'Перегородки из ПВХ',
			href:'/PvcPartitions'
		},
		{
			id: 6,
			img: '../../public/./Product/пластиковые-двери.jpg',
			text: 'Пластиковые двери',
			href:'/PlasticDoors'
		},
	];
	return (
		<div className={className}>
			<div className="product_text">
				<h3>Наша продукция</h3>
			</div>
			<Product mass={mass} />
			<div className='product_button'><button className="all_products">Все продукты</button></div>

		</div>
	);
};

export const Products = styled(ProductsContainer)`
	padding: 40px 0;
	margin: 0;
	

	.product_text {
		text-align: center;
		margin-bottom: 30px;
	}
	.product_button{
		display: flex;
	}

	.product_text h3 {
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 44px;
		text-transform: uppercase;
		color: #222938;
		margin: 0;
	}
.all_products {
		background-color: #0c54a0;
		font-size: 34px;
		color: #fff;
		width: 268px;
		height: 74px;
		margin: 0 auto;
	}
	a{
		text-decoration: none;
	}
`;
