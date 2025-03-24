export interface Product extends Partial<MoreProps> {
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

interface MoreProps {
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: MetaData;
    images: string[];
}
type Category = 'beauty' | 'gadget' | "furniture"

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string; // ISO 8601 format
    reviewerName: string;
    reviewerEmail: string;
}

interface MetaData {
    createdAt: string; // ISO 8601 format
    updatedAt: string; // ISO 8601 format
    barcode: string;
    qrCode: string;
}

interface Dimensions {
    width: number,
    height: number,
}
