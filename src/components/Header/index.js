import React from 'react';
import Link from 'next/link'
import Wrapper from './Wrapper';
import ReactModal from 'react-modal';
import { NextAuth } from 'next-auth/client'

ReactModal.setAppElement('#__next');

const linkStyle = {
  marginRight: 15
}
export default class Header extends React.Component {
  constructor(props) {
		super(props);

		this.state = {
      showModal: false
		};
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
	}

  static async getInitialProps({req}) {
    const session =  await NextAuth.init({req});
    const providers = await NextAuth.providers({req})
    console.log(providers);
    return {
      providers: null,
      // providers: providers,
      session: session,// await NextAuth.init({req}),// Add this.props.session to all pages
      lang: 'en' // Add a lang property to all pages for accessibility
    }
  }

  async handleOpenModal() {
    console.log(await NextAuth.providers());
    this.setState({
      providers: this.state.providers || await NextAuth.providers(),
      showModal: true
    });
  }
  handleCloseModal () {
    this.setState({ showModal: false });
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
