export type TRequest = {
    limit?: number
}

export type TResponse = TProduct[]

export type TProduct = {
    id?: number
    title: string
    price: number
    description: string
    image: string
    isPublished?: boolean
}

export type TCreateProduct = Omit<TProduct, 'id' | 'price' | 'image'> & {
    price: number | null
}

export type TEditProduct = Omit<TProduct, | 'image'>
