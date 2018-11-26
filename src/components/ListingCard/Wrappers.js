import styled from 'styled-components';

const CardHolder = styled.div`
  position: relative;
  padding-bottom: 0px;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none !important;
    color: #222 !important;
  }
`;

const ListingCardImg = styled.div`
// border: 1px solid;
position: relative;
border-radius: 2px;
margin-bottom: 6px;
transition: box-shadow 0.2s ease-in-out;
box-sizing: border-box;

&:hover {
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
}
`;

const PlaceHolder = styled.div`
  background-color: #faf9f5;
  position: relative;
  transition: opacity 0.25s ease-out;
  &:before {
    padding: 0 0 79.412% 0;
  }
  &:before {
    content: '';
    display: block;
    height: 0;
  }
  // &:after {
  //   content: " 🦄";
  // }
`;
const PlaceHolderContent = styled.div`
bottom: 0;
left: 0;
position: absolute;
right: 0;
top: 0;
transition: opacity 0.25s ease-out;
`;

const A = styled.a`
  text-decoration: none !important;

`;
const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Img = styled.img`
  width: 100%;
  position: absolute;
  display: block;
  max-width: 100%;
    border-radius: 2px;
`;
export {
  CardHolder,
  PlaceHolder,
  P,
  A,
  Img,
  ListingCardImg,
  PlaceHolderContent,
};
export default CardHolder;
