export interface ProductInterface {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand?: string
  sku: string
  weight: number
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
  returnPolicy: string
  minimumOrderQuantity: number
  images: string[]
}
