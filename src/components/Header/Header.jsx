import React, { useState } from 'react'
import NavItem from './NavItem'
import HeaderLogo from "../../assets/images/HeaderLogo.png"
import "./header.css"
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { cardContent } from '../../assets/util/constants';

const Header = () => {
  const [search, setSearch] = useState();
  const [counter, setCounter] = useState(0);
  const [filterdData, setFilteredData] = useState(cardContent)

  const handleChange = (e) => {
    const query = e.target.value;
    setSearch(query);

    const filtered = cardContent.filter((item)=>{
      item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)
    });
    setFilteredData(filtered)
  }

  const handleCounter = () => {
    setCounter(counter+1);
  }

  return (
    <header className='header-wrapper'>
      <div className="header">
        <div className="logo">
            <img src={HeaderLogo} alt="Header Logo" />
        </div>
        <div className="search-bar">
          <input type="text" name="" id="" className='search-field' placeholder='search your favorites' onChange={handleChange} value={search} />
          <button className='search-button'>search</button>
        </div>
        <div className="nav">
            <NavItem />
        </div>
        <div className="cart-wrapper">
          <div className="cart-icon">
          <PiShoppingCartSimpleBold />
          </div>
          <div className="cart-counter">{counter}</div>
        </div>
      </div>
    </header>
  )
}

export default Header
