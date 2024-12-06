import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

export const Pagination = () => {
    return (
        <nav aria-label="Постраничная навигация">
            <ul className="flex items-center justify-center gap-[14px] my-[52px]">
                <li>
                    <button aria-label="Предыдущая страница" className="text-green hover:text-green/80 transition-colors">
                        <img src={arrowLeft} alt="" className="w-2 h-auto" />
                    </button>
                </li>

                <li>
                    <button 
                        aria-label="Страница 1" 
                        aria-current="page"
                        className="w-6 h-8 flex items-center justify-center bg-green text-white text-xl rounded">
                        1
                    </button>
                </li>

                <li>
                    <button className="w-6 h-8 flex items-center justify-center text-black hover:text-green text-xl transition-colors">
                        2
                    </button>
                </li>

                <li>
                    <button className="w-6 h-8 flex items-center justify-center text-black hover:text-green text-xl transition-colors">
                        3
                    </button>
                </li>

                <li>
                    <button className="w-6 h-8 flex items-center justify-center text-black hover:text-green text-xl transition-colors border border-green rounded">
                        4
                    </button>
                </li>

                <li>
                    <span aria-hidden="true" className="text-black text-xl">...</span>
                </li>

                <li>
                    <button className="w-6 h-8 flex items-center justify-center text-black hover:text-green text-xl transition-colors">
                        11
                    </button>
                </li>

                <li>
                    <button aria-label="Следующая страница" className="text-green hover:text-green/80 transition-colors">
                        <img src={arrowRight} alt="" className="w-2 h-auto" />
                    </button>
                </li>
            </ul>
        </nav>
    )
}