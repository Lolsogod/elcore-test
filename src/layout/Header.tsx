import Star from '../assets/Star.svg'
import ShoppingCart from '../assets/ShoppingCart.svg'
import Logo from '../assets/logo.svg'
import Sandwich from '../assets/Sandwich.svg'
import ArrowDown from '../assets/ArrowDown.svg'
import { Socials } from './Socials'

export const Header = () => (
    <header>
        <div className="bg-dark-grey">
            <div className='container mx-auto px-2 sm:px-4 flex justify-between py-[12px] items-center'>
                <Socials />

                <div className='flex gap-[20px] sm:gap-[56px] items-center'>
                    <nav aria-label="Дополнительное меню" className="hidden md:block">
                        <ul className='flex gap-[15px] sm:gap-[30px] text-[14px] sm:text-[15px] text-white font-bold'>
                            <li><a href="#forum">Форум</a></li>
                            <li><a href="#search">Поиск</a></li>
                            <li><a href="#contacts">Контакты</a></li>
                        </ul>
                    </nav>

                    <div className='flex gap-[15px] sm:gap-[30px] items-center'>
                        <button aria-label="Избранное" className="w-[20px] sm:w-auto">
                            <img src={Star} alt="избранное"/>
                        </button>
                        <button aria-label="Корзина" className="w-[20px] sm:w-auto">
                            <img src={ShoppingCart} alt="корзина" />
                        </button>
                        <button className='text-white bg-green px-[10px] sm:px-[14px] py-[6px] rounded-[3px] hover:bg-green/80 transition-colors'>
                            <span className="hidden sm:inline">Личный кабинет</span>
                            <span className="sm:hidden">ЛК</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-black">
            <div className='container mx-auto px-4 flex justify-between items-center py-[35px]'>
                <a href="/" aria-label="На главную">
                    <img src={Logo} alt="лого" />
                </a>

                <div className='flex gap-[136px] items-center'>
                    <nav aria-label="Основное меню" className="hidden xl:block">
                        <ul className='flex gap-[40px] items-center text-white font-bold text-[18px]'>
                            <li><a href="#store">ElcoreStore</a></li>
                            <li><a href="#cloud">ElcoreCloud</a></li>
                            <li><a href="#ide">ElcoreIDE</a></li>
                            <li>
                                <a href="#resources" className='flex gap-2 items-center'>
                                    <span>Обучение и ресурсы</span>
                                    <img src={ArrowDown} className='translate-y-[2px]' alt="" role="presentation" />
                                </a>
                            </li>
                            <li><a href="#news">Новости и статьи</a></li>
                        </ul>
                    </nav>

                    <button aria-label="Открыть меню" className='flex gap-[30px] items-center'>
                        <img src={Sandwich} alt="меню"/>
                    </button>
                </div>
            </div>    
        </div>
    </header>
)