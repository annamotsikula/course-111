export interface Student  {
  name: string,
  description: string,
  thumbnail: string,
  address: Address,
}

export interface Address {
  city: string,
  street: string,
  zip: string
}
