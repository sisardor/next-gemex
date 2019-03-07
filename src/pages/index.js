import Link from 'next/link'
import { connect } from 'react-redux';
import { compose } from 'redux';
import fetch from 'isomorphic-unfetch'
import injectReducer from 'utils/injectReducer';
import { fetchListings } from 'containers/HomePage/actions';
import Layout from 'components/MyLayout';
import HomePage from 'containers/HomePage/Loadable';;
import { NextAuth } from 'next-auth/client'

class Index extends React.Component {
  static async getInitialProps ({ctx, req}) {
    const { store, isServer } = ctx

    store.dispatch(fetchListings())

    const session = await NextAuth.init({req});

    console.log('Index#getInitialProps', session);
    return { isServer, session }
  }

  componentDidMount () {
    // this.props.dispatch(fetchListings())
  }
  fetchTest = () => {
    this.props.dispatch(fetchListings())
  }
  render () {

    return (
      <Layout>
        {/*<h1>Batman TV Shows</h1>
        <form method='GET' action='/greeting'>
          Name: <input name='name' />
          <input type='submit' />
        </form>
        <button onClick={() => this.fetchTest()}>Fetch</button>*/}
        <HomePage />
      </Layout>
    );
  }
}


export default Index
