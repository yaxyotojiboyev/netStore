import React from 'react'
import Intro from '../components/ui/intro/Intro'
import Catalog from '../components/ui/catalog/Catalog'
import Discount from '../components/ui/discount/Discount'
import PopularProducts from '../components/ui/popular-products/PopularProducts'
import NewProduct from '../components/ui/new-product/NewProduct'
import AllProduct from '../components/ui/all-product/AllProduct'
import Order from '../components/ui/order/Order'

const Home = () => {
  return (
    <div>
      <Intro/>
      <Catalog/>
      <Discount/>
      <PopularProducts/>
      <NewProduct/>
      <AllProduct/>
      <Order/>
    </div>
  )
}

export default Home
