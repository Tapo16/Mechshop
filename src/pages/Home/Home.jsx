import React from 'react'
import Herosection from '../../components/Herosection/Herosection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import PopularProducts from '../../components/PopularProducts/PopularProducts'

const Home = ({AddToCart}) => {
  return (
    <>
      <Herosection />
      <Service />
      <PopularProducts AddToCart={AddToCart}/>
      <Gallery/>
    </>
  )
}

export default Home