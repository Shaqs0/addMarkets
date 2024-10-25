import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Slide1, Slide2, Slide3 } from './sliders';

export function Slider () {

	return (
		<div className='mt-20 flex w-[1350px] items-center justify-center max-lg:w-[992px]'>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={0}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				className='flex h-[553px]'
			>
				<div className='flex'>
					<SwiperSlide><img src={Slide1} className='h-[553px]'/></SwiperSlide>
					<SwiperSlide><img src={Slide2} className='h-[553px]'/></SwiperSlide>
					<SwiperSlide><img src={Slide3} className='h-[553px]'/></SwiperSlide>
					<SwiperSlide><img src={Slide1} className='h-[553px]'/></SwiperSlide>
				</div>
      ...
			</Swiper>
		</div>
	);
}