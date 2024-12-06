import { mockNews } from './data'
import { NewsCard } from './NewsCard'

export const NewsGrid = () => (
  <section aria-label="Список новостей" className="container mx-auto px-4 my-8">
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockNews.map(news => (
        <li key={news.id}>
          <NewsCard news={news} />
        </li>
        
      ))}
    </ul>
  </section>
)