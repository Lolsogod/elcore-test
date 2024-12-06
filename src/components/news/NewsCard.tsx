import { INews } from './types'

interface NewsCardProps {
  news: INews
}

export const NewsCard = ({ news }: NewsCardProps) => {
  const { title, description, date, imageUrl, type } = news

  return (
    <article className="flex flex-col gap-[10px] cursor-pointer text-dark-grey">
      <figure className="aspect-video bg-gray-200 rounded-md">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </figure>

      <div className="flex gap-[10px] items-center text-sm text-grey">
        <time dateTime={date}>{date}</time>
        {type === 'News' && (
          <>
            <span aria-hidden="true">/</span>
            <span>Новость</span>
          </>
        )}
        {type === 'Article' && <span>Статья</span>}
      </div>

      <h2 className="text-2xl font-bold leading-[38px]">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </article>
  )
}