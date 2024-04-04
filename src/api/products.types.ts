export type TRequest = {
    limit?: number
}

export type TResponse = TProduct[]

export type TProduct = {
    id: number
    title: string
    price: number
    image: string
}

export type TSingleProduct = TProduct & {
    description: string
}