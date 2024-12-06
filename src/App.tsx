import { Breadcrumbs } from './components/breadcrumbs/Breadcrumbs'
import { NewsGrid } from './components/news/NewsGrid'
import { Pagination } from './components/pagination/Pagination'
import { Tag } from './components/ui/Tag'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'

function App() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <main>
        <h1 className='text-4xl font-bold text-center mt-[52px] text-dark-grey'>Новости и статьи</h1>
        <section aria-label="Фильтры категорий">
          <nav className='flex flex-wrap gap-2 sm:gap-[15px] justify-center mt-8 sm:mt-[52px] px-4'>
            <Tag selected>Все новости и статьи</Tag>
            <Tag>Новости</Tag>
            <Tag>Статьи</Tag>
          </nav>
        </section>
        <NewsGrid />
        <Pagination />
      </main>
      <Footer />
    </>
  )
}

export default App
