export interface Product {
    id: number
    title: string,
    description: string,
    category: Category,
    price: number,
    discountPercentage?: number,
    discountedPrice?: number,
    rating: number,
    stock: number,
    thumbnail: string
}
type Category = 'beauty' | 'gadget' | "furniture"