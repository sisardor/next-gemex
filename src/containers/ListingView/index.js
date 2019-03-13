/**
 *
 * ListingView
 *
 */

import React from 'react';
import Link from 'next/link'
import NextSeo from 'next-seo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectListingView from './selectors';
import reducer from './reducer';
import messages from './messages';

import styled from 'styled-components';


const Button = styled.button`
  position: absolute;
  left: 0;
  transform: translateY(-50%);
  position: relative;
  top: 50%
`
const ButtonLeft = styled.button`
  position: absolute;
  transform: translateY(-50%);
  position: relative;
  top: 50%
`

const SpanIcon = styled.span`
  font-size: 24px;

  display: inline-block;
  fill: currentColor;
  height: 24px;
  vertical-align: middle;
  width: 24px;

  height: 36px;
  width: 36px;
`

const DivCarousel = styled.div`
  text-align: center;
`
/* eslint-disable react/prefer-stateless-function */
export class ListingView extends React.Component {
  navLeft = () => {
    console.log('left');
  }
  navRight = () => {
    console.log('right');
  }
  render() {

    let product = {}, name=''
    if (!this.props.listingView.isLoading) {
      product = this.props.listingView[this.props.productId];
      name = product.name
    }
    else {
      return <p>loading</p>
    }
    let path = product.category.path
    return (
      <div>
        <NextSeo config={{
          title: name,
          description: name,
          twitter: {
            title: name,
            description: name,
            image: product.images
          },
          openGraph: {
            type: 'product',
            locale: 'en_IE',
            title: name,
            site_name: 'Gemex',
            url: 'http://gemex.io' + this.props.originalUrl,
            description: name,
            images: [
              {
                url: product.images,
                width: 340,
                height: 270,
                type: 'image/jpeg',
                alt: name,
              },
            ]
          }
        }} />
        <h1>{product.name}</h1>
        <DivCarousel id="listing-page-image-carousel" className="">
          <ul id="image-carousel" className="list-unstyled image-carousel">
            <li><img src={'https://i.etsystatic.com/5473706/r/il/c0c0f4/522347966/il_794xN.522347966_kplm.jpg'} alt={'product.name'}/></li>
          </ul>
          <Button className="">
            <SpanIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M16,21a0.994,0.994,0,0,1-.664-0.253L5.5,12l9.841-8.747a1,1,0,0,1,1.328,1.494L8.5,12l8.159,7.253A1,1,0,0,1,16,21Z"></path>
              </svg>
            </SpanIcon>
          </Button>
          <ButtonLeft className="">
            <SpanIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M8,21a1,1,0,0,1-.664-1.747L15.5,12,7.336,4.747A1,1,0,0,1,8.664,3.253L18.5,12,8.664,20.747A0.994,0.994,0,0,1,8,21Z">
                </path>
              </svg>
            </SpanIcon>
          </ButtonLeft>
        </DivCarousel>


        {/*<img src={product.images} alt={product.name}/>
        <p>{product.price}</p>
        <Link
          as={`/cat/${path.replace(/\./g, '/')}`}
          href={{ pathname: '/cat', query: { path } }}
        >
          <a>
          {path}
          </a>
        </Link>
        <pre>{JSON.stringify(product,null, 2)}</pre>*/}
      </div>
    );
  }
}

ListingView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  listingView: makeSelectListingView(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect
)(ListingView);
