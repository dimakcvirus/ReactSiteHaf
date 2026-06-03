import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import img_backraund from '../../public/Addres/contacts-section-background.jpg';

const AdresContainer = ({ className }) => {
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

	// Координаты центра карты
	const center = [50.56609, 36.59087];

	// Местоположения для меток
	const markers = [
		{
			id: 1,
			position: [50.5395867, 36.5728801],
			text: 'Дубовое, Шоссейная улица, 2',
		},
		{
			id: 2,
			position: [50.5959748, 36.601337],
			text: 'г.Белгород пр-кт Славы 20',
		},
	];

	// Состояние для управления координатами центра и уровня зума карты
	const [mapCenter, setMapCenter] = useState(center);
	const [zoomLevel, setZoomLevel] = useState(11.5);

	// Функция для изменения вида карты при клике на маркер
	const handleZoomToMarker = (position) => {
		setMapCenter(position); // Центр для выбранного адреса
		setZoomLevel(20); // Уровень зума
	};

	// Компонент для обновления карты
	function ChangeMapView() {
		const map = useMap();
		map.setView(mapCenter, zoomLevel); // Изменение центра и уровня зума карты
		return null; // Не рендерим ничего
	}

	return (
		<div ref={containerRef} className={className}>
			<div className="parallax-bg">
				<motion.div className="parallax-image" style={{ y }}>
					<img src={img_backraund} alt="фон" />
				</motion.div>
			</div>
			<div className="group_container">
				<div className="left">
					<div className="group">
						<div>
							<h6>Адрес: г.Белгород пр-кт Славы 20</h6>
						</div>
						<div>
							<h6>Телефон: +7 (4722) 50-55-50</h6>
						</div>
						<div>
							<h6>Адрес: Дубовое, Шоссейная улица, 2</h6>
						</div>
						<div>
							<h6>Телефон: +7 (4722) 50-55-33</h6>
						</div>
					</div>
				</div>

				<div className="map-container">
					<MapContainer
						center={mapCenter}
						zoom={zoomLevel}
						style={{ height: '100%', width: '100%' }}
					>
						<TileLayer
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
							attribution="© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
						/>

						<ChangeMapView />

						{markers.map((marker) => (
							<Marker
								key={marker.id}
								position={marker.position}
								icon={
									new L.Icon({
										iconUrl:
											'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
										iconSize: [25, 41],
										iconAnchor: [12, 41],
									})
								}
								eventHandlers={{
									click: () => handleZoomToMarker(marker.position),
								}}
							>
								<Popup>{marker.text}</Popup>
							</Marker>
						))}
					</MapContainer>

					<div className="overlay"></div>
				</div>
			</div>
		</div>
	);
};

export const Adres = styled(AdresContainer)`
	position: relative;
	transform: translateZ(0);
	height: 720px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 25px 0 0 0;
	padding: 0;

	.parallax-bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 0;
	}

	.parallax-image {
		width: 100%;
		height: 800px;
		position: absolute;
		top: -100px;
	}

	.parallax-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.group_container {
		display: flex;
		justify-content: space-between;
		width: 1100px;
		height: 474px;
		margin: 0 auto;
		z-index: 1;
		position: relative;
	}

	.left {
		background-color: rgba(41, 41, 58, 0.9);
		width: 455px;
		padding: 20px;
		color: white;
		display: flex;
		justify-content: center;
	}

	.group {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 20px;
	}

	h6 {
		font-family: 'PT Sans Narrow', sans-serif;
		font-weight: 400;
		font-size: 25px;
		color: #fff;
		letter-spacing: 1px;
	}

	.map-container {
		width: 650px;
		height: 474px;
		position: relative;
	}

	.leaflet-container {
		height: 100%;
		z-index: 1;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(61, 145, 240, 0.3);
		z-index: 2;
		pointer-events: none;
	}
`;
