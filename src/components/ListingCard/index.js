/**
 *
 * ListingCard
 *
 */

import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CardHolder, PlaceHolder, P, Img } from './Wrappers';

/* eslint-disable react/prefer-stateless-function */
class ListingCard extends React.PureComponent {
  render() {
    return (
      <CardHolder>
        <PlaceHolder>
          <Img
            src="https://i.etsystatic.com/8078153/c/1224/972/426/869/il/ff2dce/1493120124/il_340x270.1493120124_gmsn.jpg"
            alt=""
          />
        </PlaceHolder>
        <div>
          <P>{this.props.title}</P>
          <P>{this.props.price}</P>
        </div>
      </CardHolder>
    );
  }
}

ListingCard.propTypes = {};

export default ListingCard;
