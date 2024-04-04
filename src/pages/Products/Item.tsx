import { FC } from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '@/api/products.types'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useDeleteProductMutation } from '@/api/products.api'
import { useActions } from '@/hooks/useActions'
import { useToasts } from 'react-toast-notifications'

type TProps = {
    product: TProduct
}

export const Item: FC<TProps> = ({ product }) => {
    const productList = useTypedSelector(
        state => state.appReducer.activeProductList
    )

    const { deleteMyProduct } = useActions()

    const { addToast } = useToasts()

    const [deleteProduct] = useDeleteProductMutation()

    const handleProductOnDelete = async (title: string) => {
        if (product?.id) {
            await deleteProduct(+product.id)
        }

        deleteMyProduct(title)

        addToast('Product has been deleted!', {
            autoDismiss: true,
            appearance: 'error'
        })
    }

    return (
        <li className='flex flex-col items-center py-2'>
            <Link
                to={`/products/${product.id}`}
                className='w-full'
            >
                <div className='flex flex-col items-center py-2'>
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
                        <p className='font-bold text-xl text-center'>
                            Description: {product.description}
                        </p>
                    )}
                    <p className='text-[#802c6e] font-bold text-xl my-2'>
                        Price: {product.price} $
                    </p>
                    <Link
                        to={`${product.id}/edit`}
                        className='content-center px-14 py-3 inline-block text-[#f2f1f6] bg-[#802c6e] text-center text-sm font-bold rounded-lg transition-colors duration-300 hover:text-[#802c6e] hover:bg-black'
                    >
                        Edit
                    </Link>
                </div>
            </Link>
            <button
                className='p-3 text-[#f2f1f6] bg-[#802c6e] text-center text-sm font-bold rounded-lg transition-colors duration-300 hover:bg-red-700'
                onClick={() => handleProductOnDelete(product.title)}
            >
                Delete the product
            </button>
        </li>
    )
}
