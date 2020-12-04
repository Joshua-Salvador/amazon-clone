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
        <Product id="12321341" title="The Lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400__.jpg" rating={4}/>
        <Product id="49538094" title="Kenwood Mixer" price={239.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/518dqS-CPwL._AC_SY400_.jpg"/>
        </div>

        <div className="home__row">
          {/* Products */}
          <Product id="10250424" title="Pet Bed" price={59.99} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/41SDyCV%2BCOL._SX425_.jpg"/>
          <Product id="23349098" title="Basketball" price={19.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/51ypdgkRZnL._AC_SY400_.jpg"/>
          <Product id="23449076" title="Bubble Umbrella" price={2.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/41-L41uAmGL._AC_SY1000_.jpg"/>
        </div>

        <div className="home__row">
          {/* Products */}
          <Product id="12254323" title="iPhone" price={899.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/51biqZP8%2B2L._AC_SX466_.jpg"/>
        </div>
      </div>
    </div>
  )
}

export default Home
