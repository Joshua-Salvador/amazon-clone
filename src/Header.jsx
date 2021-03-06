import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';

function Header() {
  const [{basket, dispatch}] = useStateValue()

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"/>
        <SearchIcon className="header__searchIcon"/>
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Joshua</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
            <div className="header__optionBasket">
             <ShoppingBasketIcon />
             <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
        </Link>
      

        <div className="header__option"></div>
      </div>
    </div>
  )
}

export default Header
