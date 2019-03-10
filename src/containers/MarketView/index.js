/**
 *
 * MarketView
 *
 */

import React from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import Breadcrumbs from 'components/Breadcrumbs';
import ListingGrid from 'components/ListingGrid';
import ListingCard from 'components/ListingCard';
import SidebarFilterGroup from 'components/SidebarFilterGroup';
import Wrapper from 'containers/HomePage/Wrapper';
import makeSelectMarketView from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class MarketView extends React.Component {
  render() {
    let list = [], breadcrumbs = [], product_count = null
    if (this.props.marketview) {
      let products = this.props.marketview.get('products') || []
      list = products.map((product) =>{
        return <ListingCard product={product.toJS()} />
      });

      breadcrumbs = this.props.marketview.get('breadcrumbs') || []
      product_count = this.props.marketview.get('product_count')
    }

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
        <Breadcrumbs breadcrumbs={breadcrumbs} count={product_count}/>
        <Wrapper>
          <SidebarFilterGroup />
          <ListingGrid list={list}>
          </ListingGrid>
        </Wrapper>
      </div>
    );
  }
}
// <main className="content">
//   <Breadcrumbs breadcrumbs={breadcrumbs} count={product_count}/>
//   <div className="grid-container" style={{width:1096, clear:'both'}}><ListingGrid list={list}/></div>
// </main>
MarketView.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  marketview: makeSelectMarketView(),
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
)(MarketView);
