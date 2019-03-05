import React from 'react'
import Link from 'next/link'
import { NextAuth } from 'next-auth/client'

export default class extends React.Component {

  static async getInitialProps({req, query}) {
    console.log('auth/error.js');
    console.log('query', query);
    const session =  await NextAuth.init({req});
    let props = {
      session: session,// await NextAuth.init({req}),// Add this.props.session to all pages
      lang: 'en' // Add a lang property to all pages for accessibility
    }
    props.action = query.action || null
    props.type = query.type || null
    props.service = query.service || null
    return props
  }

  render() {
    if (this.props.action == 'signin' && this.props.type == 'oauth') {
      return(
          <p className="mb-3">
            To protect your account, if you have perviously signed up
            using another service you must link accounts before you
            can use a different service to sign in.
          </p>
      )
    } else if (this.props.action == 'signin' && this.props.type == 'token-invalid') {
      return(
        <div className="text-center mb-5">
          <h1 className="display-4 mt-5 mb-2">Link not valid</h1>
          <p className="lead">This sign in link is no longer valid.</p>
          <p className="lead"><Link href="/auth"><a>Get a new sign in link</a></Link></p>
        </div>
      )
    } else {
      return(
        <div className="text-center mb-5">
          <h1 className="display-4 mt-5">Error signing in</h1>
          <p className="lead">An error occured while trying to sign in.</p>
          <p className="lead"><Link href="/auth"><a>Sign in with email or another service</a></Link></p>
        </div>
      )
    }
  }
}
