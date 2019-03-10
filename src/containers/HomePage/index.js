/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import ListingGrid from 'components/ListingGrid';
import ListingCard from 'components/ListingCard';
import Breadcrumbs from 'components/Breadcrumbs';
import SidebarFilterGroup from 'components/SidebarFilterGroup';
import Wrapper from './Wrapper';
import reducer from './reducer';
import makeSelectMarketView from 'containers/MarketView/selectors';
import { makeSelectProducts, makeSelectProviders } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {

  onRemove = () => {};
  render() {
    const { products = [], providers } = this.props
    console.log('HomePage#render', providers);
    const list = products.map((product) =>{
      return <ListingCard product={product.toJS()} />
    });
    let breadcrumbs = [], product_count = null
    if (this.props.marketview) {
      breadcrumbs = this.props.marketview.get('breadcrumbs') || []
      product_count = this.props.marketview.get('product_count')
    }

    return (
      <div>
        <Breadcrumbs breadcrumbs={breadcrumbs} count={product_count}/>
        <Wrapper className="container">
          <SidebarFilterGroup />
          <ListingGrid list={list}/>
        </Wrapper>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  products: makeSelectProducts(),
  providers: makeSelectProviders(),
  marketview: makeSelectMarketView(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });


export default compose(
  withReducer,
  withConnect,
)(HomePage);
