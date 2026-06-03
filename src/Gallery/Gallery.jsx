import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export const Gallery = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Zoom, EffectCoverflow]}
			navigation
			pagination={{ clickable: true }}
			zoom
			spaceBetween={20}
			slidesPerView={1}
			style={{ width: '800px', height: '500px' }}
		>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/4.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/8.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/dsc_1538.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_11.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_16.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_23.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_dsc_1580.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/dsc08350111111111.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_dsc0846811111.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_dsc08453111111.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_dsc0834011111111.jpg" />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper-zoom-container">
					<img src="../../public/Gallery/thumbs_dsc0847511111111111.jpg" />
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
