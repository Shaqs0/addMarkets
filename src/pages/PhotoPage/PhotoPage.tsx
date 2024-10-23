import { ListPolygon, Photo360 } from '../../assets';
import { Button } from '../../components/ui/Button/Button';


export function PhotoPage () {
	return (
		<div className='flex mt-12'>
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
				<div className='flex'>
					<img src={Photo360}/>
				</div>
			</div>
			
		</div>
	);
}