/**
 *
 * TopNavigation
 *
 */

import React from 'react';
import Link from 'next/link'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectCategories } from './selectors';


/* eslint-disable react/prefer-stateless-function */
class TopNavigation extends React.PureComponent {
  render() {
    console.log(this.props.categories.toJS());
    let navs = this.props.categories.map((nav, i) => {
      return (
        <li key={i}>
          <Link href={'/cat' + nav.get('path')}>
            <a>
              {nav.get('name')}
            </a>
          </Link>
        </li>
      );
    })
    return (
      <div>
        <ul>{navs}</ul>
      </div>
    );
  }
}

TopNavigation.propTypes = {};


export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withConnect,
)(TopNavigation);
