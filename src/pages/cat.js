import {withRouter} from 'next/router'
import Head from 'next/head'
import NextSeo from 'next-seo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Layout from 'components/MyLayout'
import fetch from 'isomorphic-unfetch'
import MarketView from 'containers/MarketView/Loadable'
import { fetch_By_Id } from 'containers/HomePage/actions'
import { fetchCategoryProducts } from 'containers/MarketView/actions'

const Market = (props) => {
  return (
    <Layout>
      <MarketView />
    </Layout>
  );
}


Market.getInitialProps = async function ({ ctx }) {
  const { store, isServer } = ctx
  let path = ctx.query.path
  store.dispatch(fetchCategoryProducts(path))
  return { path }
}

const mapStateToProps = createStructuredSelector({

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
)(Market);
