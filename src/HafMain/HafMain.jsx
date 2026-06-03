import styled from 'styled-components';
import { Header } from '../Header/Header';
import { Products } from '../Product/Products';
import { Services } from '../Services/Services';
import { Parallax } from '../Parallax/Parallax';
import { Galler } from '../Gallery/Galler';
import { Adres } from '../Addres/Adress';
import { Podval } from '../Podval/Podval';
import aktion from '../../public/third_window-1.jpg';

const HafMainContainer = ({ className }) => {
	return (
		<div className={className}>
			<Header />
			<img className="banner" src={aktion} alt="" />
			<Products />
			<Services />
			<Parallax />
			<Galler />
			<Adres />
			<Podval />
		</div>
	);
};

export const HafMain = styled(HafMainContainer)`
	.banner {
		width: 100%;
		display: block;
	}

	/* Отступы между компонентами */

	${Products} {
		margin-bottom: 0;
	}

	${Services} {
		margin-top: 0;
	}

	${Parallax} {
		margin-top: 0;
	}
`;
