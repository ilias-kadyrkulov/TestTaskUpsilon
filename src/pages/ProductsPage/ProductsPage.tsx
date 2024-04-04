import { useLazyGetProductsQuery } from '@/api/products.api'
import { ProductsList } from './ProductsList'
import { useEffect } from 'react'

const ProductsPage = () => {
    const [getProducts, { data: products }] = useLazyGetProductsQuery({})
    

    useEffect(() => {
        getProducts({})
    }, [])

    const handleOnQuantityButtonClicked = (quantity: number) => () => {
        getProducts({ limit: quantity })
    }

    return (
        <>
            <div className='flex-1 bg-[#d1c4a0]'>
                <div className='p-2'>
                    <div className='max-w-[300px]'>
                        <h2 className='font-semibold'>
                            Download products in quantity:
                        </h2>
                        <div className='flex gap-3'>
                            {Array.from([8, 16, 20]).map(quantity => (
                                <button
                                    key={quantity}
                                    className='px-4 py-1 text-[#f2f1f6] bg-[#802c6e] font-bold rounded-lg transition-colors duration-300 hover:text-[#802c6e] hover:bg-black'
                                    onClick={handleOnQuantityButtonClicked(
                                        quantity
                                    )}
                                >
                                    {quantity}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {products && <ProductsList products={products} />}
            </div>
        </>
    )
}

export default ProductsPage
