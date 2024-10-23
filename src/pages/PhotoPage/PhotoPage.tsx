import { ListPolygon, OrangePoints, Photo360 } from '../../assets';
import { Button } from '../../components/ui/Button/Button';


export function PhotoPage () {
	return (
		<div>
			<div className='flex mt-12 p-2 '>
				<div className='flex w-full items-center justify-center gap-36'>
					<div className='flex flex-col gap-10'>
						<p className='text-[#47A7E3] font-montserrat text-[46px] font-bold'>
                    Фотосъёмка 360 
							<span className='text-[#E97522]'> / </span> 
                        3D фото</p>
						<div className='flex text-text-color  flex-col w-[634px] text-wrap gap-8 font-montserrat text-base font-medium'>
							<p className='flex gap-3 items-center'><img src={ListPolygon}/>Фото 360 даёт возможность детально рассмотреть продукт со всех сторон.</p>
							<p className='flex gap-3 items-center'><img src={ListPolygon}/>За счет вращения продукта в разные стороны, увеличивается
                        время нахождения клиента на карточке Вашего товара,
                        растёт CTR и вероятность покупки. </p>
							<p className='flex gap-3 items-center'><img src={ListPolygon}/>Помните - 97% Ваших конкурентов не используют фото 360!
							</p>
						</div>    
						<Button>ОСТАВИТЬ ЗАЯВКУ</Button>
					</div>
					<div className='flex min-h-full'>
						<img src={Photo360} className='w-full h-auto object-contain' alt="360 Photo"/>
					</div>
				</div>
			</div>

			<div className='flex w-full justify-center items-center flex-col gap-1 mt-16 p-2'>
				<img src={OrangePoints} className='w-[93px] h-[36px]'/>
				<p className='text-[#306694] font-montserrat text-[40px] font-bold'>Тарифы</p>
			</div>

			<div className='flex mt-20 justify-center items-center p-2'>
				<div className='flex flex-col gap-3'>
					<p className='text-text-color font-montserrat text-xl font-bold'>Предметное фото 360</p>
					<p className='w-[908px] text-text-color font-montserrat text-base font-medium'>В стоимость включено: Fashion-фотограф, фотостудия, постобработка и ретушь фото, подготовка вещей к съёмке. От 12 кадров</p>
				</div>
			</div>
		</div>
	);
}