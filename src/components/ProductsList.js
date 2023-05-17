import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

// useselector는 어떤 state 값을 사용하고 싶은지 선택하는 것이고, useDispatch는 state 값을 변경시킬 때 사용한다.


// reducer는 store 안에 있는 state를 어떻게 바꿀 것인지(action)를 결정한다.
// 리덕스는 각각의 state의 변화를 불변하게 유지해야 하는데, 그러기 위해 이전 state 값을 복사한 복제본은 만들고, 그것을 리턴한다.
// 만약 currentState의 값이 undefined라면, state가 정의되지 않았다는 것이기 때문에, 기본 state 값을 설정하여 리턴할 수 있다.
function reducer(currentState, action) { 
  if (currentState === undefined) {
    return {
      // 기본 state 값 설정
    };
  }

  const newState = {...currentState}
  return newState;
}



function ProductsList() {

}

export default ProductsList;