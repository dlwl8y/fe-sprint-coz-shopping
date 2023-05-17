import React from "react";
import styled from 'styled-components'


const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;




const Item = ( {data} ) => {
  return (
    <ItemContainer>
      {data.map((item) => {
        
      })}
    </ItemContainer>
  );
};

export default Item;