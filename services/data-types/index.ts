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

export interface BanksTypes {
  _id: string
  name: string
  bankName: string
  noRekening: string
}

export interface PaymentTypes {
  _id: string
  type: string
  status: string
  banks: BanksTypes[]
}

export interface NominalsTypes {
  _id: string
  coinName: string
  coinQuantity: number
  price: number
}