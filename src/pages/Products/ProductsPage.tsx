import { useEffect, useMemo, useState } from 'react'
import { useLazyGetProductsQuery } from '@/api/products.api'
import { List } from './List'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import { TList } from '@/store/types/app.types'
import ReactSwitch from 'react-switch'
import clsx from 'clsx'

const ProductsPage = () => {
    const productList = useTypedSelector(
        state => state.appReducer.activeProductList
    )
    const myProducts = useTypedSelector(state => state.myProductsReducer)

    const [isSwitchChecked, setIsSwitchChecked] = useState(false)

    const { setActiveProductList } = useActions()

    const handleOnQuantityButtonClicked = (quantity: number) => () => {
        getProducts({ limit: quantity })
    }

    const handleOnListChanged = (list: TList) => {
        setActiveProductList(list)
    }

    const sortedProducts = useMemo(() => {
        if (isSwitchChecked) {
            return myProducts.filter(product => product.isPublished)
        } else {
            return myProducts.filter(product => !product.isPublished)
        }
    }, [isSwitchChecked])

    const handleSwitchOnChanged = () => {
        setIsSwitchChecked(!isSwitchChecked)
    }

    const [getProducts, { data: products }] = useLazyGetProductsQuery({})

    useEffect(() => {
        getProducts({})
    }, [])

    return (
        <>
            <div className='flex-1 bg-[#d1c4a0]'>
                <div className='flex flex-col gap-2 sm:flex-row justify-between items-center p-2 overflow-x-clip'>
                    <div className='flex gap-2'>
                        {Array.from(['Fake Store Products', 'My Products']).map(
                            list => (
                                <button
                                    key={list}
                                    className='px-4 py-2 text-[#f2f1f6] bg-[#802c6e] text-sm font-bold rounded-md transition-colors duration-300 hover:text-[#802c6e] hover:bg-black'
                                    onClick={() =>
                                        handleOnListChanged(list as TList)
                                    }
                                >
                                    {list}
                                </button>
                            )
                        )}
                    </div>

                    <div
                        className={clsx('transition-all duration-500', {
                            '-translate-x-10 opacity-0 sm:translate-x-10':
                                productList === 'My Products',
                            'translate-x-0 opacity-100':
                                productList === 'Fake Store Products'
                        })}
                    >
                        <h2 className='font-semibold text-center'>
                            Download products in quantity:
                        </h2>
                        <div className='flex justify-center mt-2 gap-3'>
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
                    {productList === 'My Products' && (
                        <>
                            <h2>{isSwitchChecked ? 'Published' : 'Unpublished'}</h2>
                            <ReactSwitch
                                onChange={handleSwitchOnChanged}
                                checked={isSwitchChecked}
                            />
                        </>
                    )}
                </div>
                <div className='p-2'>
                    {products && productList === 'Fake Store Products' ? (
                        <List products={products} />
                    ) : (
                        <>
                            <h2 className='font-bold text-2xl text-center'>
                                My Products
                            </h2>
                            <List products={sortedProducts} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProductsPage