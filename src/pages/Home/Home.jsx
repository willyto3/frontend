import React from 'react'
import HeroSection from '../../components/HeroSection'
import Services from '../../components/Services'
import Brands from '../../components/Brands'
import FeatureProducts from '../../components/FeatureProduct'

const Home = () => {
  const data = {
    name: 'Gamer Market Colombia',
  }
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProducts />
      <Services />
      <Brands />
    </>
  )
}

export default Home
