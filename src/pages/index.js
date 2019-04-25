import { fetchListings } from 'containers/HomePage/actions';
import { fetchCategoryProducts } from 'containers/MarketView/actions'
import Layout from 'components/MyLayout';
import HomePage from 'containers/HomePage/Loadable';;
import { NextAuth } from 'next-auth/client'

class Index extends React.Component {
  static async getInitialProps ({ctx, req}) {
    const { store, isServer } = ctx
    let path = ctx.query.path
    store.dispatch(fetchListings())
    // console.log('ctx.query',ctx.query);
    // console.log('path', path);
    // store.dispatch(fetchCategoryProducts(path))
    const session = await NextAuth.init({req});
    console.log('session', session);
    return { isServer, session }
  }

  render () {
    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  }
}

export default Index
