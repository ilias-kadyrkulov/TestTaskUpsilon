import { FC } from 'react'
import { ProductItem } from './ProductItem'
import { TProduct } from '@/api/products.types'

type TProps = {
    products: TProduct[]
}

export const ProductsList: FC<TProps> = ({ products }) => {
    return (
        <>
            <ul className='grid grid-cols-1 p-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                {products.map(product => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
        </>
    )
}
