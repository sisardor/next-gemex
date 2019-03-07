import React from 'react';
import Router from 'next/router'
import Link from 'next/link'
import Wrapper from './Wrapper';
import ReactModal from 'react-modal';
import { NextAuth } from 'next-auth/client'
import Cookies from 'universal-cookie'

ReactModal.setAppElement('#__next');

const linkStyle = {
  marginRight: 15
}
export default class Header extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      showModal: false,
      session: {}
		};
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSignoutSubmit = this.handleSignoutSubmit.bind(this);
	}

  async handleOpenModal() {
    // console.log('handleOpenModal',await NextAuth.init());
    this.setState({
      session: this.state.session || await NextAuth.init(),
      providers: this.state.providers || await NextAuth.providers(),
      showModal: true
    });
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  async handleSignoutSubmit(event) {
    event.preventDefault()

    // Save current URL so user is redirected back here after signing out
    const cookies = new Cookies()
    cookies.set('redirect_url', window.location.pathname, { path: '/' })

    await NextAuth.signout()
    Router.push('/')
    this.handleCloseModal()
  }

  render() {
    console.log('Header',this.props);
    return (
      <Wrapper>
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/admin">
            <a style={linkStyle}>Admin</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
          <button onClick={this.handleOpenModal}>Login/Singup</button>
          <ReactModal
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal}>Close Modal</button>
            <SignInButtons providers={this.state.providers}/>

            <form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignoutSubmit}>
              <input name="_csrf" type="hidden" value={this.state.session.csrfToken}/>
              <button type="submit" block className="pl-4 rounded-0 text-left dropdown-item"><span className="icon ion-md-log-out mr-1"></span> Sign out</button>
            </form>

        </ReactModal>
      </Wrapper>
    );
  }
}



export class SignInButtons extends React.Component {
  render() {
    return (
      <React.Fragment>
        {
          Object.keys(this.props.providers).map((provider, i) => {
            if (!this.props.providers[provider].signin) return null

            return (
              <p key={i}>
                <a className="btn btn-block btn-outline-secondary" href={this.props.providers[provider].signin}>
                  Sign in with {provider}
                </a>
                {this.props.providers[provider].signin}
              </p>
              )
          })
        }
      </React.Fragment>
    )
  }
}
