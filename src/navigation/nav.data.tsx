import { Layout } from '@/layout/Layout'
import {
    HomePage,
    ProductCreationPage,
    ProductDeletionPage,
    ProductEditionPage,
    ProductsPage,
    SingleProductPage
} from '@/pages'

type Route = {
    path: string
    element: JSX.Element
    children?: Route[]
}

export const routes: Route[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: 'products', element: <ProductsPage /> },
            { path: 'products/:id', element: <SingleProductPage /> },
            { path: 'products/:id/edit', element: <ProductEditionPage /> },
            { path: 'products/:id/delete', element: <ProductDeletionPage /> },
            { path: 'products/create', element: <ProductCreationPage /> }
        ]
    }
]
