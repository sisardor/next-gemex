import {withRouter} from 'next/router'
import Head from 'next/head'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import MarketView from 'containers/MarketView/Loadable'
import { fetch_By_Id } from 'containers/HomePage/actions'
import { loadCategoryProducts } from 'containers/MarketView/actions'

const Market = (props) => {
  return (
    <Layout>
      <MarketView />
      {JSON.stringify(props.query)}
    </Layout>
  );
}


Market.getInitialProps = async function ({ ctx }) {
  const { store, isServer } = ctx
  // console.log(ctx);
  const query = ctx.query
  const slug = "wedding-and-engagement"
  store.dispatch(loadCategoryProducts(slug))
  return { query }
}

export default Market
