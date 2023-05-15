import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


const HeaderHeader = styled.header`
  width: 100wh;
  height: 80px;
  background: #FFFFFF;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0 76px;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

const HeaderTitleDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 55px;
  height: 30px;
  display: flex;
  margin-right: 1rem;
`;

const TitleNameDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
`;

const NavImg = styled.img`
  width: 30px;
  height: 20px;
  display: flex;
`;

const DropdownUl = styled.ul`
  /* display: none; */
  position: absolute;
  width: 200px;
  height: 150px;
  background: #FFFFFF;
  border-radius: 10px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  margin: 210px -45px 0 0;
  padding: 0;

  &::after {
    /* display: block; */
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 15px 15px;
    border-color: #FFFFFF transparent;
    width: 0;
    z-index: 1;
    top: -15px;
    left: 125px;
  }
`;

const DropdownLi = styled.li`
  display: flex;
  height: 50px;
  font-size: 16px;
  justify-content: center;
  align-items: center;

  :not(:last-of-type) { /* 마지막 요소만 제외하고 적용 */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}
`
const DropdownImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;


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
    <HeaderHeader>

      <HeaderTitleDiv onClick={() => { navigate('/'); }}>
        <LogoImg src="../images/logo_icon.png" alt="logo"/>
        <TitleNameDiv><h1>COZ Shoppting</h1></TitleNameDiv>
      </HeaderTitleDiv>

      <HeaderNav ref={dropdownRef}>
        <NavImg src="../images/nav_icon.png" alt="menu" onClick={dropdownHandler} />
        {isOpen ? 
        <DropdownUl>
          <DropdownLi>
            OOO님, 안녕하세요
          </DropdownLi> 
          <DropdownLi onClick={() => { navigate('/products/list'); }}>
            <DropdownImg src="../images/Products_icon.png" alt="products icon"/>
            상품리스트 페이지
          </DropdownLi>
          <DropdownLi onClick={() => { navigate('/bookmark'); }}>
            <DropdownImg src="../images/bookmark_icon.png" alt="bookmark icon"/>
            북마크 페이지
          </DropdownLi>
        </DropdownUl>
        : undefined }
      </HeaderNav>

    </HeaderHeader>
  );
}

export default Header;