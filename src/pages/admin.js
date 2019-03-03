import {withRouter} from 'next/router'
import Layout from '../components/MyLayout'
import fetch from 'isomorphic-unfetch'
import { NextAuth } from 'next-auth/client'

const Admin = (props) => {
  return (<Layout>
    Admin
  </Layout>);
}


Admin.getInitialProps = async function ({ req }) {
  const session =  await NextAuth.init({req});
  console.log(session);
  return {
      session: session,//await NextAuth.init({req}),// Add this.props.session to all pages
      // lang: 'en' // Add a lang property to all pages for accessibility
    }
}

export default Admin;
