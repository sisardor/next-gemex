/**
 *
 * ListingCard
 *
 */

import React from 'react';
import Link from 'next/link'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  CardHolder,
  PlaceHolder,
  P,
  A,
  Img,
  ListingCardImg,
  PlaceHolderContent,
} from './Wrappers';

/* eslint-disable react/prefer-stateless-function */
class ListingCard extends React.PureComponent {
  render() {  
    // return <p>XX</p>   href={`/listing/${this.props.product.id}`}
    return (<CardHolder>
        <Link
              as={`/listing/${this.props.product.id}/${this.props.product.url}`}
              href={{ pathname: '/listing', query: { id: this.props.product.id } }}

        >
          <a>
            <ListingCardImg>
              <PlaceHolder>
                <PlaceHolderContent>
                  <Img src={this.props.product.images} alt="" />
                </PlaceHolderContent>
              </PlaceHolder>
            </ListingCardImg>
            <div>
              <P>{this.props.product.name}</P>
              <P>{this.props.product.price}</P>
            </div>
          </a>
        </Link>
      </CardHolder>);
  }
}

ListingCard.propTypes = {};

export default ListingCard;
