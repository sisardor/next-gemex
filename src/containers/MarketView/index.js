/**
 *
 * MarketView
 *
 */

import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import ListingGrid from 'components/ListingGrid';
import ListingCard from 'components/ListingCard';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMarketView from './selectors';
import { makeSelectCatProducts } from './selectors';
// import reducer from './reducer';
// import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class MarketView extends React.Component {
  render() {
    console.log(this.props.marketview);
    console.log(this.props);
    let list = []
    if (this.props.marketview) {
      let products = this.props.marketview.get('products')
      list = products.map((product, index) =>{
        return <ListingCard product={product.toJS()} />
      });
    }
    console.log(list);
    return (
      <div>
        <Head>
          <title>This page has a title 🤔</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <main className="content">
          <div className="grid-container" style={{width:1096}}><ListingGrid list={list}/></div>
        </main>
      </div>
    );
  }
}

MarketView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  marketview: makeSelectMarketView(),
  prod: makeSelectCatProducts()
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

// const withReducer = injectReducer({ key: 'marketView', reducer });
// const withSaga = injectSaga({ key: 'marketView', saga });

export default compose(
  // withReducer,
  // withSaga,
  withConnect
)(MarketView);
