import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import ListingView from 'containers/ListingView/Loadable'
import { fetchListingById } from 'containers/ListingView/actions'

const Listing = (props) => {
  return (<Layout>
    <ListingView productId={props.id} originalUrl={props.originalUrl}/>
  </Layout>);
}


Listing.getInitialProps = async function ({ ctx }) {
  const { store, isServer } = ctx
  const { originalUrl } = ctx.req || {}
  const { id } = ctx.query
  store.dispatch(fetchListingById(id))
  return { id, originalUrl }
}

export default Listing
