import React from "react";
import { useNavigate } from 'react-router-dom';
import header_logo from "../images/logo_icon.png"
import nav_icon from "../images/nav_icon.png"
import dropdown_products from "../images/menu_products.png"
import dropdown_bookmark from "../images/menu_bookmark.png"

function Header() {

  const navigate = useNavigate();

  return (
    <header id="header-body">
      <div id="header-title" onClick={() => {navigate('/'); }}>
        <img id="header-title-logo" src={header_logo} alt="logo" />
        <h1 id="header-title-name">COZ Shopping</h1>
      </div>
      <nav id="header-nav">
        <img id="header-nav-icon" src={nav_icon} alt="menu-icon" />
        <div className="header-nav-dropdown">
          <div className="header-nav-dropdown-list">이지효님, 안녕하세요!</div>
          <div className="header-nav-dropdown-list" onClick={() => {navigate('/products/list'); }}><img id="dropdown-products" src={dropdown_products} alt="menu_products"/>상품리스트 페이지</div>
          <div className="header-nav-dropdown-list" onClick={() => {navigate('/bookmark'); }}><img id="dropdown-bookmark" src={dropdown_bookmark} alt="menu_bookmark"/>북마크 페이지</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;