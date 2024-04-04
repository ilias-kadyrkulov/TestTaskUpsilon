import { useLazyGetSingleProductQuery } from '@/api/products.api'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const { id } = useParams()

    const [getSingleProduct, { data: product }] = useLazyGetSingleProductQuery()

    useEffect(() => {
        id && getSingleProduct(+id)
    }, [id])

    return (
        <div className='flex-1 flex flex-col items-center justify-center p-5'>
            {product && (
                <>
                    <img
                        src={product.image}
                        alt={product.title}
                        className='w-40 h-40'
                    />
                    <h2 className='text-center text-xl font-semibold pt-2'>{product.title}</h2>
                    <p className='my-5'>{product.description}</p>
                    <span className='text-[#802c6e] font-bold text-3xl'>
                        {product.price} $
                    </span>
                </>
            )}
        </div>
    )
}

export default SingleProductPage
