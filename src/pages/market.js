import {withRouter} from 'next/router'
import Head from 'next/head'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import MarketView from 'containers/MarketView/Loadable'
import { fetch_By_Id } from 'containers/HomePage/actions'


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
  console.log(ctx.asPath);
  const query = ctx.query
  return { query }
}

export default Market
