import { Socials } from "./Socials";
import Logo from '../assets/logo.svg'
import DownloadButton from '../assets/DownloadButton.svg'

export const Footer = () => (
    <footer>
        <div className="bg-black text-white">
            <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between pt-[70px] pb-[95px] gap-8'>
                <div className="text-center lg:text-left">
                    <a href="/" aria-label="На главную">
                        <img src={Logo} alt="" className="mb-[29px] mx-auto lg:mx-0" />
                    </a>
                    <p className="mb-[13px] w-full lg:w-[270px] font-bold">
                        Платформа для автоматизации ваших процессов
                    </p>
                    <a href="#download" 
                       className="mb-[33px] inline-block"
                       aria-label="Скачать приложение">
                        <img src={DownloadButton} alt="" />
                    </a>
                    <p className="font-bold">
                        © ООО «НПО «Фарватер» 2024
                    </p>
                </div>

                <nav className="flex flex-col lg:flex-row gap-8 lg:gap-[120px]">
                    <div className="text-center lg:text-left">
                        <h2 className="font-bold text-grey text-[20px] lg:text-[24px] pb-[26px]">Платформа</h2>
                        <ul className="flex flex-col gap-[18px] text-[18px]">
                            <li><a href="#store">ElcoreStore</a></li>
                            <li><a href="#cloud">ElcoreCloud</a></li>
                            <li><a href="#ide">ElcoreIDE</a></li>
                        </ul>
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="font-bold text-grey text-[20px] lg:text-[24px] pb-[26px]">Обучение и ресурсы</h2>
                        <ul className="flex flex-col gap-[18px] text-[18px] list-none p-0 m-0">
                            <li><a href="#about">Что такое ElcorePLC</a></li>
                            <li><a href="#docs">Документация</a></li>
                            <li><a href="#learn">Обучающие материалы</a></li>
                            <li><a href="#examples">Примеры использования</a></li>
                            <li><a href="#knowledge">База знаний</a></li>
                        </ul>
                    </div>
                    <div className="text-center lg:text-left whitespace-nowrap">
                        <a href="/account" 
                           className="inline-block border py-[13px] px-[17px] text-[18px] rounded-[3px] hover:bg-white hover:text-black transition-colors">
                            Личный кабинет
                        </a>
                    </div>
                </nav>
            </div>
        </div>

        <div className="bg-dark-grey">
            <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4 py-[25px]'>
                <Socials />
                <nav className='flex flex-col lg:flex-row gap-[22px] text-mid-grey text-center lg:text-left'>
                    <a href="/privacy">Политика конфиденциальности</a>
                    <a href="/sitemap">Карта сайта</a>
                </nav>
            </div>
        </div>
    </footer>
)