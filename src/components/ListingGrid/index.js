/**
 *
 * ListingGrid
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style-position: outside;
  display: flex !important;
  list-style-type: none;
  flex-wrap: wrap !important;
  padding-left: 0;
  box-sizing: border-box;
  margin:0;


  @media only screen and (min-width: 0) {
    margin: -6px;
  }
  @media only screen and (min-width: 480px) {
    margin: -9px;
  }
`;
const Li = styled.li`
  // border:1px solid;
  padding: 9px;
  margin-right: 0;
  box-sizing: border-box;

  @media only screen and (min-width: 0) {
      width: 50%;
      order: 0 !important;
  }
  @media only screen and (min-width: 900px) {
    width: 33.33333%;
    order: 0 !important;
  }
  @media only screen and (min-width: 1200px) {
    width: 25%;
    order: 0 !important;
  }

    display: inline-block;
    margin-right: -4px;
    vertical-align: top;
`;

const GridContainer = styled.div`
  float: none;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 18px;
  padding-right: 18px;

  @media only screen and (min-width: 0) {
    padding-left: 0px;
  }
`
function ListingGrid(props) {
  let lis = props.list.map((component, i) => {
    return <Li style={{marginRight: 0}} key={i}>{component}</Li>
    // return <li style={{marginRight: 0}} key={i}>{component}</li>
  })
  return (
    <GridContainer>
      <div className="grid-container" style={{}}>
        <Ul>
          {lis}
        </Ul>
      </div>
    </GridContainer>
  );
  // return (
  //   <GridContainer>
  //     <div className="grid-container" style={{}}>
  //       <ul>
  //         {lis}
  //       </ul>
  //     </div>
  //   </GridContainer>
  // );
}

ListingGrid.propTypes = {};

export default ListingGrid;
