import styled from "styled-components";


export const HeaderContainer = styled.header`
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

export const HeaderTitleDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 55px;
  height: 30px;
  display: flex;
  margin-right: 1rem;
`;

export const TitleNameDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
`;

export const NavImg = styled.img`
  width: 30px;
  height: 20px;
`;

export const DropdownUl = styled.ul`
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

export const DropdownLi = styled.li`
  display: flex;
  height: 50px;
  font-size: 16px;
  justify-content: center;
  align-items: center;

  :not(:last-of-type) { /* 마지막 요소만 제외하고 적용 */
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
}
`

export const DropdownImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;