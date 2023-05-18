import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import fetchDataAction from '../reduxes/actions/fetchDataAction';
import Item from '../components/Item';

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 5px solid red;
`;

const Article = styled.article`
  margin: 24px 76px;
  width: 1128px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 5px solid black;
  
  > h2 {
    width: 100%;
    height: 38px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function MainPage() {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsReducer.productList.slice(0, 4));

  useEffect(() =>{
    fetchDataAction(dispatch);
  }, [dispatch])

  return (
    <Container>
      <Article>
        <ListContainer>
        <h2>상품 리스트</h2>
        {productsList.map((data, idx) => {
          return <Item data={productsList} key={idx}></Item>
        })}
        <h2>북마크 리스트</h2>
        {console.log(productsList)}
        </ListContainer>
      </Article>
    </Container>
  );
}

export default MainPage;