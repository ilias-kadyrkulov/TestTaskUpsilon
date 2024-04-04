import { FC } from 'react'
import { TProduct } from '@/api/products.types'
import { Link } from 'react-router-dom'

type TProps = {
    product: TProduct
}

export const ProductItem: FC<TProps> = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`}>
            <li className='flex flex-col items-center py-2'>
                <img
                    src={product.image}
                    alt={product.title}
                    className='w-24 h-24'
                />
                <h2 className='basis-[7.5ch] text-center text-lg font-medium'>{product.title}</h2>
                <p className='text-[#802c6e] font-bold text-xl'>{product.price} $</p>
            </li>
        </Link>
    )
}
