import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from './Header.styled';


function Header() {

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); 
  const dropdownRef = useRef(null);

  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.HeaderContainer>

      <S.HeaderTitleDiv onClick={() => { navigate('/'); }}>
        <S.LogoImg src="../images/logo_icon.png" alt="logo"/>
        <S.TitleNameDiv><h1>COZ Shopping</h1></S.TitleNameDiv>
      </S.HeaderTitleDiv>

      <S.HeaderNav ref={dropdownRef}>
        <S.NavImg src="../images/nav_icon.png" alt="menu" onClick={dropdownHandler} />
        {isOpen ? 
        <S.DropdownUl>
          <S.DropdownLi>
            OOO님, 안녕하세요
          </S.DropdownLi> 
          <S.DropdownLi onClick={() => { navigate('/products/list'); }}>
            <S.DropdownImg src="../images/Products_icon.png" alt="products icon"/>
            상품리스트 페이지
          </S.DropdownLi>
          <S.DropdownLi onClick={() => { navigate('/bookmark'); }}>
            <S.DropdownImg src="../images/bookmark_icon.png" alt="bookmark icon"/>
            북마크 페이지
          </S.DropdownLi>
        </S.DropdownUl>
        : <></> }
      </S.HeaderNav>

    </S.HeaderContainer>
  );
}

export default Header;