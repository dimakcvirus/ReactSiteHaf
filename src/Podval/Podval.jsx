import styled from 'styled-components';
import ok from '../../public/ok.svg';
import vk from '../../public/vk.png';

const podvalContainer = ({ className }) => {
	return (
		<div className={className}>
			<div className="grop">
				<div className="social">
					<img alt="ok" src={ok} className="icon" />
					<img alt="vk" src={vk} className="icon icon--invert" />
				</div>
				<div className="text">ТД HAFNER ©2000-2024</div>
				<div className="back">
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					>
						наверх
					</button>
				</div>
			</div>
		</div>
	);
};

export const Podval = styled(podvalContainer)`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 135px;
	background-color: #1a1d4c;
	color: #fff;
	.grop {
		display: flex;
		width: 100%;
		max-width: 1100px; /* чтобы не было на весь монитор */
		justify-content: space-around;
		align-items: center;
	}
	.icon {
		width: 30px;
		height: 30px;
		padding: 3px;
	}
	.icon--invert {
		filter: brightness(0) invert(1);
	}
	.text {
		font-family: PT Sans Narrow;
		line-height: 1.2;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
	}

	.back button {
		background-color: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.3);
		color: #fff;
		font-family: 'PT Sans Narrow', sans-serif;
		font-size: 18px;
		padding: 10px 20px;
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.back button:hover {
		background-color: rgba(255, 255, 255, 0.2);
		border-color: rgba(255, 255, 255, 0.5);
	}
`;
