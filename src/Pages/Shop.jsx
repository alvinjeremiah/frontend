import React from 'react'
import Carousel from '../Components/Carousel/Carousel'
import './Shop.css'
import ProductList from '../Components/Product/ProductList'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Carousel/>
      <div className="box-container">
      <h2 className="box-heading">Where arts meets reality</h2>
      <p className="box-paragraph">
        Join our community of artists and make the world colorful. Together, we can bring art to life.
      </p>
      <button className="box-button">Join Now</button>
    </div>
    <ProductList/>
    <Footer />
    </div>
  )
}

export default Shop