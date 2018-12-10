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

/* eslint-disable react/prefer-stateless-function */
export class ListingView extends React.Component {
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
        <img src={product.images} alt={product.name}/>
        <p>{product.price}</p>
        <Link
          as={`/cat/${path.replace(/\./g, '/')}`}
          href={{ pathname: '/cat', query: { path } }}
        >
          <a>
          {path}
          </a>
        </Link>
        <pre>{JSON.stringify(product,null, 2)}</pre>
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
