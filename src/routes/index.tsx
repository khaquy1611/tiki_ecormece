import { lazy } from 'react'
const HomePage = lazy(() => import('../pages/Home'))
const OrderPage = lazy(() => import('../pages/Order'))
const ProductPage = lazy(() => import('../pages/Products'))
const NotFoundPage = lazy(() => import('../pages/NotFound'))

export const routes = [
  {
    id: '1',
    path: '/',
    page: HomePage,
    isShowHeader: true,
  },
  {
    id: '2',
    path: '/order',
    page: OrderPage,
    isShowHeader: true,
  },
  {
    id: '4',
    path: '/products',
    page: ProductPage,
    isShowHeader: true,
  },
  {
    id: '5',
    path: '*',
    page: NotFoundPage,
  },
]
