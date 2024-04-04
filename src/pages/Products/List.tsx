import { FC } from 'react'
import { Item } from './Item'
import { TProduct } from '@/api/products.types'

type TProps = {
    products: TProduct[]
}

export const List: FC<TProps> = ({ products }) => {
    return (
        <>
            <ul className='grid grid-cols-1 p-2 divide-x-2 divide-y-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                {products.map(product => (
                    <Item
                        key={product.description}
                        product={product}
                    />
                ))}
            </ul>
        </>
    )
}
