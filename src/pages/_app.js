import App, { Container } from 'next/app'
import React from 'react'
import NextSeo from 'next-seo';
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import configureStore from '../configureStore';

const DEFAULT_SEO = {
  title: 'Gemex home page',
  description: 'Gemex website sell geme stones',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://localhost:3000',
    title: 'Gemex',
    description: 'Gemex website sell geme stones',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    images: [
      {
        url: 'https://i.etsystatic.com/14828304/c/806/640/118/372/il/385d11/1399052046/il_340x270.1399052046_oj6y.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://i.etsystatic.com/14828304/c/806/640/118/372/il/385d11/1399052046/il_340x270.1399052046_oj6y.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt',
      }
    ],
    site_name: 'Gemex.io'
  },
  twitter: {
    handle: '@garmeeh',
    cardType: 'summary_large_image'
  }
};

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    // console.log(ctx);
    // console.log('-----_app-------');
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ctx})
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    if (typeof window !== 'undefined') {
      window.store = store
    }
    // console.log(store.getState().toJS());
    return (
      <Container>
        <NextSeo config={DEFAULT_SEO} />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

// export default withRedux(configureStore)(MyApp)
export default withRedux(configureStore)(withReduxSaga({ async: true })(MyApp))
