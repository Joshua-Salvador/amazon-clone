import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__img" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon-banner"/>
        <div className="home__row">
        {/* Products */}
        <Product title="The Lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400__.jpg" rating={4}/>
        <Product />
        </div>

        <div className="home__row">
          {/* Products */}
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home__row">
          {/* Products */}
          <Product />
        </div>
      </div>
    </div>
  )
}

export default Home
