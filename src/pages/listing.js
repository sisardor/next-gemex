import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import ListingView from 'containers/ListingView/Loadable'
import { fetchListingById } from 'containers/ListingView/actions'

const Listing = (props) => {
  return (<Layout><ListingView productId={props.id}/></Layout>);
}


Listing.getInitialProps = async function ({ ctx }) {
  const { store, isServer } = ctx
  const { id } = ctx.query
  // console.log(ctx);
  store.dispatch(fetchListingById(id))
  // console.log(`Fetched show: ${id}`)
  return { id }
}

export default Listing
