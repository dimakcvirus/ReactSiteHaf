import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductContainer = ({ className, mass }) => {
	return (
		<div className={className}>
			{mass.map((pvh) => (
				<div key={pvh.id} className="cont">
					<Link key={pvh.id} to={pvh.href}>
						<div>
							<div>
								<img src={pvh.img} />
							</div>
						</div>
						<div>
							<div className="test">
								<h5>{pvh.text}</h5>
							</div>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export const Product = styled(ProductContainer)`
	margin: 0 auto 30px;
	display: flex;
	flex-wrap: wrap;
	width: 1170px;
	gap: 20px;

	.cont {
		width: 360px;
	}
	.test {
		background-color: #29293a;
		color: #fff;
		text-align: center;
		font-size: 28px;
		padding: 20px;
	}
	.test h5 {
		margin: 0;
	}
	img {
		display: block;
		width: 100%;
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
// 