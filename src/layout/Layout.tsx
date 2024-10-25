import { Link, Outlet, useLocation } from 'react-router-dom';
import { BurgerIcon, CloseIcon, Logo, Mail, MobileNameLogo, NameLogo, NameLogoFooter, Polygon, SecondWave, SupportCallIcon, SupportMailIcon, ThirdWave, Wave} from '../assets';
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
			<header className='fixed left-0 top-0 z-10 w-full bg-[white]'>
				<div className='mt-10 flex items-center justify-center max-lg:mt-8'>
					<div className='mb-12 flex w-[1204px] items-center justify-around max-lg:w-[1027px] max-md:w-[100wh] max-md:justify-around'>
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
									className="size-8" 
								/>
							</button>
						</div>

						<div className='flex gap-2 max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-0'>
							<img src={Logo} alt="Logo" className="h-[35px] w-[30px]" />
							<img src={NameLogo} alt='nameLogo' className='h-[35px] w-[92px] max-md:hidden'/>
							<img src={MobileNameLogo} alt='MobileNameLogo' className='h-[35px] w-[92px] min-md:hidden' />
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
									className="size-8" 
									alt="Menu"
								/>
							</button>
						</div>

						<div className='flex items-center gap-[32px] max-md:hidden'>
							<div className='flex'>
								<ul className="flex gap-[32px] font-montserrat text-sm font-medium max-lg:gap-4">
									<li><Link to={'/'} className={`select-none ${isActive('/')}`}>Маркетплейсы</Link></li>
									<li 
										className='relative flex cursor-pointer select-none items-center gap-2'
										onClick={() => handleDropdownToggle('content')}
									>
										<a className={`select-none ${isActive('/content')}`}>Контент</a>
										<img
											src={Polygon}
											alt="Polygon"
											className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'content' ? 'rotate-180' : ''}`}
										/>
										{activeDropdown === 'content' && (
											<div className="absolute top-full mt-2 h-[281px] w-[323px] rounded-lg bg-[white] p-4 shadow-lg">
												<ul className='mt-3 flex flex-col gap-1 font-montserrat text-sm font-medium text-text-color'>
													<li><Link to={'photo'} className={`select-none ${isActive('/photo')}`}>Фото 360</Link></li>
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
									<li className='relative flex cursor-pointer select-none items-center gap-2'>
										<a className={`select-none ${isActive('/design')}`}>Дизайн</a>
									</li>
									<li className='relative flex cursor-pointer select-none items-center gap-2'
										onClick={() => handleDropdownToggle('design')}>
										<a className={`select-none ${isActive('/contacts')}`}>Контакты</a>
										<img
											src={Polygon}
											alt="Polygon"
											className={`transition-transform duration-300 ease-in-out ${activeDropdown === 'design' ? 'rotate-180' : ''}`}
										/>
										{activeDropdown === 'design' && (
											<div className="absolute top-full mt-2 h-[128px] w-[323px] rounded-lg bg-[white] p-4 shadow-lg">
												<ul className='mt-4 flex flex-col gap-4 font-montserrat text-sm font-medium text-text-color'>
													<li><a href="support" className='flex flex-row items-center gap-2'><img src={SupportMailIcon}/>support@addmarkets.ru</a></li>
													<li><a href="#" className='flex flex-row items-center gap-2'><img src={SupportCallIcon}/>+7 (499) 460 55 61</a></li>
												</ul>
											</div>
										)}
									</li>
								</ul>
							</div>
							<div className='flex items-center gap-[28px] max-lg:gap-4'>
								<button className='select-none rounded-[10px] border-2 border-solid border-primary-light-blue px-6 py-2 font-montserrat text-xs font-medium text-[#54AFDD]'>
									ОБРАТНЫЙ ЗВОНОК
								</button>
								<span className='select-none font-montserrat text-sm font-medium text-text-color'>+7 (499) 344 60 91</span>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="pt-[120px]">
				{isMenuOpen && (
					<div className="fixed inset-0 z-10 mt-[10vh] bg-[white]">
						<div className="p-6">
							<ul className="mt-12 flex flex-col items-center gap-6 font-montserrat text-sm font-medium text-text-color">
								<li>
									<a 
										href="/" 
										className={`drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)]${isBurgerActive('/')}`}
									>
      Маркетплейсы
									</a>
								</li>
								<li>
									<a 
										href="/content" 
										className={`drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)]${isBurgerActive('/content')}`}
										
									>
      Контент
									</a>
								</li>
								<li>
									<a 
										href="/design" 
										className={`drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)]${isBurgerActive('/design')}`}
										
									>
      Дизайн
									</a>
								</li>
								<li>
									<a 
										href="/contacts" 
										className={`drop-shadow-[0px_1px_2px_rgba(143,164,169,0.15)]${isBurgerActive('/contacts')}`}
										
									>
      Контакты
									</a>
								</li>
							</ul>

							<div className="mt-8 flex flex-col items-center gap-4">
								<button className='rounded-[10px] border-2 border-solid border-primary-light-blue px-6 py-2 font-montserrat text-xs font-medium text-[#54AFDD]'>
									ОБРАТНЫЙ ЗВОНОК
								</button>
								<span className='font-montserrat text-sm font-medium text-text-color'>+7 (499) 344 60 91</span>
							</div>
						</div>
					</div>
				)}
			</div>
			<section>
				<Outlet />
			</section>
			<footer className='relative min-h-screen max-w-full'>
				<div className='absolute bottom-0 w-full'>

					<img src={ThirdWave} className='md:bottom-[140px] sm:bottom-[120px] absolute bottom-[160px] left-0 z-10 w-full' alt="Third Wave" />

					<img src={SecondWave} className='md:bottom-[120px] sm:bottom-[100px] absolute bottom-[140px] left-0 z-20 w-full' alt="Second Wave" />

					<img src={Wave} className='absolute bottom-0 left-0 z-30 w-full' alt="Top Wave" />

					<div className='relative z-40 flex h-[66px] items-center justify-around bg-[#2F6192]'>
						<img src={NameLogoFooter} alt="Footer Logo" />
						<div className='flex flex-col items-end font-montserrat text-xs font-medium text-[white]'>
							<p>© 2021 Addmarkets group</p>
							<p>Designed by: @iwon.design</p>
						</div>
					</div>
				</div>
			</footer>


		</div>
	);
}
