import styled from 'styled-components';
import { Gallery } from './Gallery';

const GallerContainer = ({ className }) => {
	return (
		<div className={className}>
			<div>
				<h2 className="text">Наши работы</h2>
			</div>
			<div>
				<Gallery />
			</div>
		</div>
	);
};

export const Galler = styled(GallerContainer)`
	.text {
		margin: 25px 0 25px;
		font-family: 'Roboto Slab';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 44px;
		letter-spacing: 1px;
		color: #222938;
		text-align: center;
	}
`;
