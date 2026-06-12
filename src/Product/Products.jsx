import styled from 'styled-components';
import { Product } from './Product.jsx';
import { href } from 'react-router-dom';

const ProductsContainer = ({ className }) => {
	const mass = [
		{
			id: 1,
			img: '../../public/пластиковые-окна.jpg',
			text: 'Пластиковые окна',
			href: '/PvcWindows',
		},
		{ id: 2, img: '../../public/люминевое.jpg', text: 'Алюминиевые окна',href:'/AluminumWindows' },
		{ id: 3, img: '../../public/лоджия.jpg', text: 'Балконы и лоджии' },
		{ id: 4, img: '../../public/нестандартное.jpg', text: 'Нестандартные окна' },
		{
			id: 5,
			img: '../../public/перегородки-пвх.jpg',
			text: 'Перегородки из ПВХ',
		},
		{
			id: 6,
			img: '../../public/пластиковые-двери.jpg',
			text: 'Пластиковые двери',
		},
	];
	return (
		<div className={className}>
			<div className="product_text">
				<h3>Наша продукция</h3>
			</div>
			<Product mass={mass} />
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
`;
