import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import fetchDataAction from '../reduxes/actions/fetchDataAction';
import Item from '../components/Item';

const Container = styled.div`
  margin: 24px 76px;
  border: 5px solid red;
`;

// const Article = styled.article`
//   display: flex;
//   border: 5px solid black;
//   flex-direction: column;
  
//   > h2 {
//     width: 100%;
//   }
// `;


function MainPage() {
  const dispatch = useDispatch();
  const productsList = useSelector(state => state.productsReducer.productList.slice(0, 4));

  useEffect(() =>{
    fetchDataAction(dispatch);
  }, [dispatch])


  return (
    <Container>
      <h2>상품 리스트</h2>
      <Item data={productsList}></Item>
      <h2>북마크 리스트</h2>
      {console.log(productsList)}

    </Container>
  );
}

export default MainPage;