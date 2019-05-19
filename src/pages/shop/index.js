import React from 'react';
import Router from 'next/router'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import redirect from '../../lib/redirect'
import Layout from '../../components/MyLayout'
// import fetch from 'isomorphic-unfetch'
import { NextAuth } from 'next-auth/client'
import { makeSelectSession } from 'containers/HomePage/selectors';

class ShopIndex extends React.Component {
  // static async getInitialProps({ ctx, req }) {
  //
  //   const session = await NextAuth.init({force: true, req: req});
  //   const providers = await NextAuth.providers({req})
  //   console.log('ShopIndex session', session);
  //   if (!session.user) {
  //     // Already signed in? No need to continue.
  //     // Throw them back to the main page
  //     // redirect(ctx, '/')
  //     return {session}
  //   }
  //   // console.log(session);
  //   return {
  //     session,// await NextAuth.init({req}),// Add this.props.session to all pages
  //     lang: 'en', // Add a lang property to all pages for accessibility
  //     providers
  //   }
  // }

  adminAccessOnly() {
    return (
      <div className="text-center pt-5 pb-5">
        <h1 className="display-4 mb-5">Admin Access Only</h1>
        <pre>{JSON.stringify(this.props.session, null, 4)}</pre>

      </div>
    )
  }

  render() {
    console.log(this.props);
    if (!this.props.session.user || this.props.session.user.admin !== true)
      return <Layout>{this.adminAccessOnly()}</Layout>
    return <p>Admin</p>
  }
}

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  session: makeSelectSession()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(ShopIndex);
