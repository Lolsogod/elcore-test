import Tlg from '../assets/social/Tlg.svg'
import Dzen from '../assets/social/Dzen.svg'
import Yt from '../assets/social/Yt.svg'
import Vk from '../assets/social/Vk.svg'

export const Socials = () => (
    <nav aria-label="Социальные сети">
        <ul className='flex gap-[22px] items-center'>
            <li>
                <a href="#" 
                   aria-label="Мы в Telegram"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src={Tlg} alt="" className="w-auto h-[17px]" />
                </a>
            </li>
            <li>
                <a href="#" 
                   aria-label="Мы в Дзен"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src={Dzen} alt="" className="w-auto h-[17px]" />
                </a>
            </li>
            <li>
                <a href="#" 
                   aria-label="Наш YouTube канал"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src={Yt} alt="" className="w-auto h-[14px]" />
                </a>
            </li>
            <li>
                <a href="#" 
                   aria-label="Мы ВКонтакте"
                   target="_blank"
                   rel="noopener noreferrer">
                    <img src={Vk} alt="" className="w-auto h-[17px]" />
                </a>
            </li>
        </ul>
    </nav>
)