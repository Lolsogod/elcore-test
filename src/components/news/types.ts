export type ArticleType = 'News' | 'Article'

export interface INews {
  id: number
  title: string
  description: string
  date: string
  type: ArticleType
  imageUrl: string
}