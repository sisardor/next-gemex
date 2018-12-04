/**
 *
 * ListingView
 *
 */

import React from 'react';
import Link from 'next/link'
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
    let href = '/cat/' + path.replace(/\./g, '/')
    return (
      <div>
        <Helmet>
          <title>{name} | Gemex</title>
          <meta name={name} content="Description of ListingView" />
        </Helmet>
        <p>{product.name}</p>
        <img src={product.images}/>
        <p>{product.price}</p>
        <Link
              as={href}
              href={{ pathname: '/cat', query: { categoryId: product.category.id } }}
        >
          <a>
          {href}
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

// const withReducer = injectReducer({ key: 'listingView', reducer });
// const withSaga = injectSaga({ key: 'listingView', saga });

export default compose(
  // withReducer,
  // withSaga,
  withConnect
)(ListingView);
