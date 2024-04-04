import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { bindActionCreators } from '@reduxjs/toolkit'
import { myProductsSliceActions, appSliceActions } from '@/store/slices/index'

const actions = {
    ...myProductsSliceActions,
    ...appSliceActions
}

export const useActions = () => {
    const dispatch = useTypedDispatch()

    return bindActionCreators(actions, dispatch)
}
