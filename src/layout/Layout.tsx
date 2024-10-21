import { Outlet, useLocation } from 'react-router-dom';
import { BurgerIcon, CloseIcon, Logo, Mail, MobileNameLogo, NameLogo, NameLogoFooter, Polygon, SupportCallIcon, SupportMailIcon, Wave} from '../assets';
import { useState } from 'react';

export function Layout() {
	const location = useLocation(); 
	const [isMenuOpen, setIsMenuOpen] = useState(false);   
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleDropdownToggle = (menu: string) => {
		if (activeDropdown === menu) {
			setActiveDropdown(null);
		} else {
			setActiveDropdown(menu); 
		}
	};

	const isActive = (path: string) => location.pathname === path ? 'text-selected-text' : 'text-text-color';

	const isBurgerActive = (path: string) => location.pathname === path ? 'text-selected-text underline' : 'text-primary';

	return (
		<div>
			<header className='fixed top-0 left-0 w-full z-10 bg-white'>
				<div className='flex justify-center items-center mt-10 max-lg:mt-8'>
					<div className='flex w-[1204px] justify-around items-center mb-12 max-lg:w-[1027px] max-md:w-[100wh] max-md:justify-around'>
						<div className="min-md:hidden">
							<button 
								onClick={() => {
									if (!isMenuOpen) {
										handleMenuToggle();
									}
								}}
							>
								<img 
									src={isMenuOpen ? Mail : BurgerIcon} 
									alt="Menu"
									className="w-8 h-8" 
								/>
							</button>
						</div>

						<div className='flex gap-2 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-0'>
							<img src={Logo} alt="Logo" className="w-[30px] h-[35px]" />
							<img src={NameLogo} alt='nameLogo' className='max-md:hidden w-[92px] h-[35px]'/>
							<img src={MobileNameLogo} alt='MobileNameLogo' className='min-md:hidden w-[92px] h-[35px]' />
						</div>

						<div className='min-md:hidden'>
							<button 
								onClick={() => {
									if (isMenuOpen) {
										setIsMenuOpen(false);
									}
								}} 
								disabled={!isMenuOpen}
							>
								<img 
									src={isMenuOpen ? CloseIcon : Mail} 
									className="w-8 h-8" 
									alt="Menu"
								/>
							</button>
						</div>

						<div className='flex gap-[32px] items-center max-md:hidden'>
							<div className='flex'>
								<ul className="flex gap-[32px] font-montserrat text-sm font-medium max-lg:gap-4">
									<li><a href="/" className={`select-none ${isActive('/')}`}>Маркетплейсы</a></li>
									<li 
										className='relative flex gap-2 items-center cursor-pointer select-none'
										onClick={() => handleDropdownToggle('content')}
									>
										<a className={`select-none ${isActive('/content')}`}>Контент</a>
										<img
											src={Polygon}
											alt="Polygon"
											className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'content' ? 'rotate-180' : ''}`}
										/>
										{activeDropdown === 'content' && (
											<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-[323px] h-[281px]">
												<ul className='flex text-text-color flex-col mt-3 gap-1 font-montserrat text-sm font-medium'>
													<li><a href="Photo">Фото 360</a></li>
													<li><a href="#">Фото на невидимом манекене</a></li>
													<li><a href="#">Предметная фотосъёмка</a></li>
													<li><a href="#">Фото раскладки товара</a></li>
													<li><a href="#">SEO оптимизированные тексты</a></li>
													<li><a href="#">Дизайн карточки товара и инфографика</a></li>
													<li><a href="#">Фото на моделях</a></li>
													<li><a href="#">Имиджевая съёмка</a></li>
													<li><a href="#">Видеосъёмка</a></li>
												</ul>
											</div>
										)}
									</li>
									<li className='relative flex gap-2 items-center cursor-pointer select-none'>
										<a className={`select-none ${isActive('/design')}`}>Дизайн</a>
									</li>
									<li className='relative flex gap-2 items-center cursor-pointer select-none'
										onClick={() => handleDropdownToggle('design')}>
										<a className={`select-none ${isActive('/contacts')}`}>Контакты</a>
										<img
											src={Polygon}
											alt="Polygon"
											className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'design' ? 'rotate-180' : ''}`}
										/>
										{activeDropdown === 'design' && (
											<div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-[323px] h-[128px]">
												<ul className='flex text-text-color flex-col mt-4 gap-4 font-montserrat text-sm font-medium'>
													<li><a href="support" className='flex flex-row items-center gap-2'><img src={SupportMailIcon}/>support@addmarkets.ru</a></li>
													<li><a href="#" className='flex flex-row items-center gap-2'><img src={SupportCallIcon}/>+7 (499) 460 55 61</a></li>
												</ul>
											</div>
										)}
									</li>
								</ul>
							</div>
							<div className='flex gap-[28px] items-center max-lg:gap-4'>
								<button className='pt-2 pl-6 pb-2 pr-6 border-2 border-solid border-primary-light-blue rounded-[10px] text-[#54AFDD] font-montserrat text-xs font-medium select-none'>
									ОБРАТНЫЙ ЗВОНОК
								</button>
								<span className='text-text-color font-montserrat text-sm font-medium select-none'>+7 (499) 344 60 91</span>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="pt-[120px]">
				{isMenuOpen && (
					<div className="fixed inset-0 bg-[white] z-1 mt-[10vh]">
						<div className="p-6">
							<ul className="flex flex-col text-text-color items-center gap-6 mt-12 font-montserrat text-sm font-medium">
								<li>
									<a 
										href="/" 
										className={`filter drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)] ${isBurgerActive('/')}`}
									>
      Маркетплейсы
									</a>
								</li>
								<li>
									<a 
										href="/content" 
										className={`filter drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)] ${isBurgerActive('/content')}`}
										
									>
      Контент
									</a>
								</li>
								<li>
									<a 
										href="/design" 
										className={`filter drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)] ${isBurgerActive('/design')}`}
										
									>
      Дизайн
									</a>
								</li>
								<li>
									<a 
										href="/contacts" 
										className={`filter drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)] ${isBurgerActive('/contacts')}`}
										
									>
      Контакты
									</a>
								</li>
							</ul>

							<div className="flex flex-col items-center gap-4 mt-8">
								<button className='pt-2 pl-6 pb-2 pr-6 border-2 border-solid border-primary-light-blue rounded-[10px] text-[#54AFDD] font-montserrat text-xs font-medium'>
									ОБРАТНЫЙ ЗВОНОК
								</button>
								<span className='text-text-color font-montserrat text-sm font-medium'>+7 (499) 344 60 91</span>
							</div>
						</div>
					</div>
				)}
			</div>
			<section>
				<Outlet />
			</section>

			<footer className='min-h-screen max-w-full relative'>
				<div className='absolute bottom-0 w-full'>
					<img src={Wave} className='w-full h-auto' alt="Wave" />
					<div className='flex bg-[#2F6192] h-[66px] justify-around items-center'>
						<img src={NameLogoFooter} />
						<div className='flex flex-col text-[#FFF] font-montserrat text-[11px] font-medium items-end'>
							<p>© 2021 Addmarkets group</p>
							<p>Designed by: @iwon.design</p>
						</div>
					</div>
				</div>
			</footer>


			
		</div>
	);
}
