import { TProduct } from '@/api/products.types'
import { useMemo } from 'react'

export const useSortedProducts = (
    isSwitchChecked: boolean,
    myProducts: TProduct[]
) =>
    useMemo(() => {
        if (isSwitchChecked) {
            return myProducts.filter(product => product.isPublished)
        } else {
            return myProducts.filter(product => !product.isPublished)
        }
    }, [isSwitchChecked, myProducts])
