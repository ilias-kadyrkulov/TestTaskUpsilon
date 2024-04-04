import { lazy } from 'react'
export { HomePage } from './HomePage'

export const ProductsPage = lazy(() => import('@/pages/Products/ProductsPage'))
export const ProductCreationPage = lazy(() => import('@/pages/Products/CreationPage'))
export const ProductDeletionPage = lazy(() => import('@/pages/Products/DeletionPage'))
export const ProductEditionPage = lazy(() => import('@/pages/Products/EditPage'))
export const SingleProductPage = lazy(() => import('@/pages/Products/SingleProductPage'))
