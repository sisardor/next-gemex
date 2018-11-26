import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import ListingView from 'containers/ListingView/Loadable'
import { fetch_By_Id } from 'containers/HomePage/actions'


const Listing = (props) => {
  console.log(props);
  return (<Layout><ListingView productId={props.id}/></Layout>);
}


Listing.getInitialProps = async function ({ ctx }) {
  const { store, isServer } = ctx
  const { id } = ctx.query
  // console.log(ctx);
  // const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  // const show = await res.json()
  store.dispatch(fetch_By_Id(id))
  console.log(`Fetched show: ${id}`)

  return { id }
}

export default Listing
