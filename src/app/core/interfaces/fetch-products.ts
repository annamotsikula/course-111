import { Product } from "./product.interface";

export interface FetchProduct {
    products: Product[],
    skip: number,
    limit: number,
    total: number
}