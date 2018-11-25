import styled from 'styled-components';

const CardHolder = styled.div`
  position: relative;
  padding-bottom: 0px;
`;

const PlaceHolder = styled.div`
  background-color: #faf9f5;
  position: relative;
  transition: opacity 0.25s ease-out;
  border: 1px solid;
  margin-bottom: 6px;
`;

const P = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Img = styled.img`
  width: 100%;
`;
export { CardHolder, PlaceHolder, P, Img };
export default CardHolder;
