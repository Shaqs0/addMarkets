import { ListPolygon, OrangePoints, Photo360 } from '../../assets';
import { Slider } from '../../components/shared/Slider/Slider';
import { Button } from '../../components/ui/Button/Button';


export function PhotoPage() {
	return (
		<div className='mb-20'>
			<div className='mt-12 flex p-2 '>
				<div className='flex w-full items-center justify-center gap-32 max-lg:gap-3'>
					<div className='flex flex-col gap-10'>
						<p className='font-montserrat text-[46px] font-bold text-primary-blue'>
							Фотосъёмка 360
							<span className='text-[#E97522]'> / </span>
							3D фото</p>
						<div className='flex w-[634px] flex-col gap-8 text-wrap font-montserrat text-base font-medium text-text-color'>
							<p className='flex items-center gap-3'><img src={ListPolygon} />Фото 360 даёт возможность детально рассмотреть продукт со всех сторон.</p>
							<p className='flex items-center gap-3'><img src={ListPolygon} />За счет вращения продукта в разные стороны, увеличивается
								время нахождения клиента на карточке Вашего товара,
								растёт CTR и вероятность покупки. </p>
							<p className='flex items-center gap-3'><img src={ListPolygon} />Помните - 97% Ваших конкурентов не используют фото 360!
							</p>
						</div>
						<Button>ОСТАВИТЬ ЗАЯВКУ</Button>
					</div>
					<div className='flex min-h-full'>
						<img src={Photo360} className='lg:w-[278px] lg:h-[277px] h-auto w-full object-contain' alt="360 Photo" />
					</div>
				</div>
			</div>

			<div className='mt-16 flex w-full flex-col items-center justify-center gap-1 p-2'>
				<img src={OrangePoints} className='h-[36px] w-[93px]' />
				<p className='font-montserrat text-[40px] font-bold text-[#306694]'>Тарифы</p>
			</div>

			<div className='mt-20 flex items-center justify-center p-2'>
				<div className='flex flex-col gap-3'>
					<p className='font-montserrat text-xl font-bold text-text-color'>Предметное фото 360</p>
					<p className='w-[908px] font-montserrat text-base font-medium text-text-color'>В стоимость включено: Fashion-фотограф, фотостудия, постобработка и ретушь фото, подготовка вещей к съёмке. От 12 кадров</p>
				</div>
			</div>

			<div className='flex items-center justify-center'>
				<Slider/>
			</div>
		</div>
	);
}