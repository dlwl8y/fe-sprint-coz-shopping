import React, { useState } from "react";
import styled from 'styled-components'


const ItemContainer = styled.div`
  display: flex;
  width: 264px;
  height: 264px;
`;

const ImgContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 6px;
`;

const ImgCard = styled.img`
  width : 264px;
  height: 210px;
  background-image: url(${(props) => props.urls});
`;

const BookmarkIcon = styled.img`
  width: 24px;
  height: 24px;
  z-index: 1;
`;

const ItemName = styled.div`
  height: 24px;
  font-size: 16px;
  font-weight: 800;
`;

const RightText = styled.div`
  height: 24px;
  text-align: right;
  font-weight: 700;
  color: ${(props) => props.color ? '#452CDD' : '#000000'};
`;

const BottomText = styled.div`
  height: 24px;
  font-size: 16px;

  .product .brand {
    text-align: right;
  }

  .exhibition {
    text-align: left;
  }
`;

const Item = ( {data} ) => {
  const {
    // 공통 요소
    id,
    type,
    // case 마다 다른 옵션
    title,
    price,
    follower,
    sub_title,
    image_url,
    brand_name,
    brand_image_url,
    discountPercentage,
  } = data;

  const [isBookmark, setIsBookmark] = useState(false);

  function objToStr(obj) {
    return JSON.stringify(obj)
  }
  
  function onClickBookmarkHandler() {
    if (isBookmark === false) {
      setIsBookmark(!isBookmark);
      let strToObj = objToStr(data);
      window.localStorage.setItem(`${id}`, strToObj);
    } else if (isBookmark === true) {
      setIsBookmark(!isBookmark);
      window.localStorage.removeItem(`${id}`);
    }
  }

  let item;
  switch (type) {
    case 'Product':
      item = (
        <ImgContainer>
          <ImgCard urls={image_url}>
            <BookmarkIcon onClick={onClickBookmarkHandler} src={isBookmark ? '../images/bookmark_on_icon.png' : '../images/bookmark_off_icon.png'} />
          </ImgCard>
          <ItemName>{title}</ItemName>
          <RightText color>{discountPercentage}%</RightText>
          <BottomText className="product">{price}</BottomText>
        </ImgContainer>
      )
      break;
    
    case 'Category':
      item = (
        <ImgContainer>
        <ImgCard urls={image_url}>
          <BookmarkIcon onClick={onClickBookmarkHandler} src={isBookmark ? '../images/bookmark_on_icon.png' : '../images/bookmark_off_icon.png'} />
        </ImgCard>
        <ItemName>{title}</ItemName>
      </ImgContainer>
      )
      break;

    case 'Exhibition':
      item = (
        <ImgContainer>
        <ImgCard urls={image_url}>
          <BookmarkIcon onClick={onClickBookmarkHandler} src={isBookmark ? '../images/bookmark_on_icon.png' : '../images/bookmark_off_icon.png'} />
        </ImgCard>
        <ItemName>{title}</ItemName>
        <BottomText className="exhibition">{sub_title}</BottomText>
      </ImgContainer>
      )
      break;

    case 'Brand':
      item = (
        <ImgContainer>
        <ImgCard urls={brand_image_url}>
          <BookmarkIcon onClick={onClickBookmarkHandler} src={isBookmark ? '../images/bookmark_on_icon.png' : '../images/bookmark_off_icon.png'} />
        </ImgCard>
        <ItemName>{brand_name}</ItemName>
        <RightText>관심고객수</RightText>
        <BottomText className="brand">{follower}</BottomText>
      </ImgContainer>
      )
      break;

    default:
      item = null;
      break;
  }

  return (
    <ItemContainer>
      {item}
    </ItemContainer>
  );
};

export default Item;