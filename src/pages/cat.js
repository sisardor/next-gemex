import Layout from 'components/MyLayout'
import MarketView from 'containers/MarketView/Loadable'
import { fetchCategoryProducts } from 'containers/MarketView/actions'

const Market = () => {
  return (
    <Layout>
      <MarketView />
    </Layout>
  );
}

Market.getInitialProps = async function ({ ctx }) {
  const { store, /*isServer*/ } = ctx
  let path = ctx.query.path
  store.dispatch(fetchCategoryProducts(path))
  return { path }
}

export default Market
