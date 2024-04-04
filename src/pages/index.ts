import { lazy } from 'react'
export { HomePage } from './HomePage'

export const ProductsPage = lazy(() => import('@/pages/ProductsPage'))
export const ProductCreationPage = lazy(() => import('@/pages/ProductCreationPage'))
export const ProductDeletionPage = lazy(() => import('@/pages/ProductDeletionPage'))
export const ProductEditionPage = lazy(() => import('@/pages/ProductEditionPage'))
export const SingleProductPage = lazy(() => import('@/pages/SingleProductPage'))
