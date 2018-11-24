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

import reducer from './reducer';
// import saga from './saga';
import { makeSelectProducts } from './selectors';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
// import LoginForm from 'components/LoginForm/Loadable';
// import { Card, Tag, Elevation } from '@blueprintjs/core';
// import products from './products.json';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  onRemove = () => {};
  render() {
    const { products = [] } = this.props
    // console.log('HomePage',this.props.products);
    // const list = [];
    const list = products.map((product, index) =>{
      // console.log(product.get('name'));
      return (
        <div key={index}>
          <p>{product.get('name')}</p>
          {/*<img src={product.thumb} />*/}
        </div>
      )
    });

    return (
      <div className="container">
        <main className="content">
          <div className="grid-container">{list}</div>
        </main>
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
