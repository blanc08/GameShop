export interface CategoryTypes {
  _id: string
  name: string
  __v: number
}
export interface FeaturedGameCardTypes {
  _id: string
  status: string
  name: string
  thumbnail: string
  category: CategoryTypes
}
