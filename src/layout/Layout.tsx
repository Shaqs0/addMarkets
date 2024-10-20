import { Outlet, useLocation } from 'react-router-dom';
import { BurgerIcon, CloseIcon, Logo, Mail, MobileNameLogo, NameLogo, Polygon } from '../assets';
import { useState } from 'react';

export function Layout() {
	const location = useLocation(); 
	const [isContentOpen, setIsContentOpen] = useState(false); 
	const [isDesignOpen, setIsDesignOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);   

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleContentToggle = () => {
		setIsContentOpen(!isContentOpen);
	};

	const handleDesignToggle = () => {
		setIsDesignOpen(!isDesignOpen);
	};

	const isActive = (path:string) => location.pathname === path ? 'text-selected-text' : 'text-text-color';

	return (
		<div>
			<div className='flex justify-center items-center mt-10 
			max-lg:mt-8'>
				<div className='flex w-[1204px] justify-around items-center mb-12 
				max-lg:w-[1027px] max-md:w-[100wh] max-md:justify-around'>

					<div className="min-md:hidden">
						<button onClick={handleMenuToggle}>
							<img src={isMenuOpen ? CloseIcon : BurgerIcon} alt="Menu" className="w-8 h-8" />
						</button>
					</div>

					<div className='flex gap-2
					 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-0'>
						<img src={Logo} alt="Logo" className="w-[30px] h-[35px]" />
						<img src={NameLogo} alt='nameLogo' className='max-md:hidden w-[92px] h-[35px]'/>
						<img src={MobileNameLogo} alt='MobileNameLogo' className='min-md:hidden w-[92px] h-[35px]' />
					</div>

					<div className='min-md:hidden'>
						<button>
							<img src={Mail} className="w-8 h-8"/>
						</button>
					</div>

					<div className='flex gap-[32px] items-center 
					max-md:hidden'>
						<div className='flex'>
							<ul className="flex gap-[32px] font-montserrat text-sm font-medium 
							max-lg:gap-4">
								<li><a href="/" className={`select-none ${isActive('/')}`}>Маркетплейсы</a></li>

								<li 
									className='relative flex gap-2 items-center cursor-pointer select-none'
									onClick={handleContentToggle}
								>
									<a className={`select-none ${isActive('/content')}`}>Контент</a>
									<img
										src={Polygon}
										alt="Polygon"
										className={`transition-transform duration-300 ease-in-out ${isContentOpen ? 'rotate-180' : ''}`}
									/>

									{isContentOpen && (
										<ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4">
											<li><a href="#">Подменю 1</a></li>
											<li><a href="#">Подменю 2</a></li>
											<li><a href="#">Подменю 3</a></li>
										</ul>
									)}
								</li>

								<li 
									className='relative flex gap-2 items-center cursor-pointer select-none'
									onClick={handleDesignToggle}
								>
									<a className={`select-none ${isActive('/design')}`}>Дизайн</a>
									<img
										src={Polygon}
										alt="Polygon"
										className={`transition-transform duration-300 ease-in-out ${isDesignOpen ? 'rotate-180' : ''}`}
									/>

									{isDesignOpen && (
										<ul className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4">
											<li><a href="#">Подменю 1</a></li>
											<li><a href="#">Подменю 2</a></li>
											<li><a href="#">Подменю 3</a></li>
										</ul>
									)}
								</li>

								<li><a href="/contacts" className={`select-none ${isActive('/contacts')}`}>Контакты</a></li>
							</ul>
						</div>
						<div className='flex gap-[28px] items-center 
						max-lg:gap-4'>
							<button className='pt-2 pl-6 pb-2 pr-6 border-2 border-solid border-primary-light-blue rounded-[10px] text-[#54AFDD] font-montserrat text-xs font-medium select-none'>
								ОБРАТНЫЙ ЗВОНОК
							</button>
							<span className='text-text-color font-montserrat text-sm font-medium select-none'>+7 (499) 344 60 91</span>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Outlet />
			</div>
			<div>FOOTER</div>
		</div>
	);
}
