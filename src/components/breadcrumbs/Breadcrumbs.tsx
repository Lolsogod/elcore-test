export const Breadcrumbs = () =>(
    <nav aria-label="breadcrumb" className="bg-black mt-[52px]">
        <ol className="container mx-auto pt-[10px] pb-[12px] px-4 text-light-grey flex gap-[10px]">
            <li><a href="/">Главная</a></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Новости и статьи</li>
        </ol>
    </nav>
)