import { FC } from 'react'
import { TProduct } from '@/api/products.types'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '@/hooks/useTypedSelector'

type TProps = {
    product: TProduct
}

export const Item: FC<TProps> = ({ product }) => {
    const productList = useTypedSelector(
        state => state.appReducer.activeProductList
    )
    return (
        <Link to={`/products/${product.id}`}>
            <li className='flex flex-col items-center py-2'>
                {product.image && (
                    <img
                        src={product.image}
                        alt={product.title}
                        className='w-24 h-24'
                    />
                )}
                <h2 className='basis-[12ch] text-center text-lg font-medium mt-2'>
                    Title: {product.title}
                </h2>
                {productList === 'My Products' && (
                    <p className='font-bold text-xl'>
                        Description: {product.description}
                    </p>
                )}
                <p className='text-[#802c6e] font-bold text-xl my-2'>
                    Price: {product.price} $
                </p>
                <Link to={`${product.id}/edit`} className='px-3 py-1 w-2/4 text-[#f2f1f6] bg-[#802c6e] text-center font-bold rounded-lg transition-colors duration-300 hover:text-[#802c6e] hover:bg-black'>
                    Edit
                </Link>
            </li>
        </Link>
    )
}
