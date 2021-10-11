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

export interface LoginTypes {
  email: string
  password: string
}

export interface UserTypes {
  id: string
  username: string
  email: string
  avatar: string
}

export interface DetailVoucherTypes {
  detail: {
    category: CategoryTypes
    nominals: NominalsTypes[]
    isFeatured: boolean
    name: string
    price: number
    status: string
    thumbnail: string
    user: UserTypes
    _id: string
  }
  payments: PaymentTypes[]
}

export interface jwtPayloadTypes {
  player: UserTypes
  iat: number
}

export interface CheckoutTypes {
  voucher: string
  nominal: string
  payment: string
  bank: string
  name: string
  accountUser: string
}
