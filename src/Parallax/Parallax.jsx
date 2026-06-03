import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import paralax_img from '../../public/Parallax/advantages-parallax-background.jpg';
import zam from '../../public/Parallax/замер-монтаж.png';
import rab from '../../public/Parallax/семь-дней-в-неделю.png';
import gar from '../../public/Parallax/гарантия-1.png';
import ras from '../../public/Parallax/рассрочка.png';

const ParallaxContainer = ({ className }) => {
	const mass = [
		{ id: 1, text: '3 дня от замера до монтажа', img: zam },
		{ id: 2, text: 'Работаем 7 дней в неделю', img: rab },
		{ id: 3, text: 'Гарантия на изделия до 7 лет', img: gar },
		{ id: 4, text: 'Рассрочка', img: ras },
	];
	const containerRef = useRef(null);
	const [startY, setStartY] = useState(0);

	useEffect(() => {
		const handleLoad = () => {
			if (containerRef.current) {
				setStartY(containerRef.current.offsetTop);
			}
		};

		handleLoad();
		window.addEventListener('load', handleLoad);
		return () => window.removeEventListener('load', handleLoad);
	}, []);

	const { scrollY } = useScroll();

	// Вычисляем прогресс скролла относительно позиции контейнера
	const progress = useTransform(
		scrollY,
		[startY - 600, startY + 300], // от 600px перед контейнером до 300px внутри
		[0, 1],
	);

	// Двигаем изображение вниз
	const y = useTransform(progress, [0, 1], [-100, 200]);

	return (
		<div ref={containerRef} className={className}>
			<div className="parallax-bg">
				<motion.div className="parallax-image" style={{ y }}>
					<img src={paralax_img} alt="" />
				</motion.div>
			</div>
			{mass.map((item) => (
				<div key={item.id} className="content">
					<img src={item.img} alt="" />
					<h5>{item.text}</h5>
				</div>
			))}
		</div>
	);
};

export const Parallax = styled(ParallaxContainer)`
	position: relative; /* ← для framer-motion */
	transform: translateZ(0); /* ← принудительный контекст */
	height: 475px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;

	.content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		width: 464px;
		height: 394px;
		padding: 0 10px 0 10px;
	}

	.content img {
		width: 80px;
		height: 80px;
		margin-bottom: 10px;
		display: block;
	}

	.content h5 {
		font-family: 'Roboto Slab';
		font-weight: 400;
		font-size: 32px;
		color: #fff;
		margin: 0;
		line-height: 1.2;
	}

	.parallax-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%; /* ← ровно 600px */
		z-index: 1;
		pointer-events: none;
		overflow: hidden;
	}

	.parallax-image {
		width: 100%;
		height: 800px; /* ← больше, чтобы было что двигать */
		position: absolute;
		top: -100px; /* ← начальный сдвиг вверх */
	}

	.parallax-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`;
