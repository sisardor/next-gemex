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
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import ListingGrid from 'components/ListingGrid';
import ListingCard from 'components/ListingCard';
import Wrapper from './Wrapper';
import reducer from './reducer';
import { makeSelectProducts } from './selectors';


/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  onRemove = () => {};
  render() {
    const { products = [] } = this.props

    const list = products.map((product, index) =>{
      return <ListingCard product={product.toJS()} />
    });

    return (
      <Wrapper className="container">
        <main className="content">
          <div className="grid-container" style={{width:1096}}><ListingGrid list={list}/></div>
        </main>
      </Wrapper>
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
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });


export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(HomePage);
