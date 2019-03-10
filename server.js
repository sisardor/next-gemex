// const express = require('express')
const next = require('next')
const nextAuth = require('next-auth')
const nextAuthConfig = require('./auth/next-auth.config')
const compression = require('compression')
const Router = require('./routes').Router
const proxy = require('http-proxy-middleware')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handle = app.getRequestHandler()

require('dotenv').load()

app.prepare()
.then(() => {
  // Load configuration and return config object
  return nextAuthConfig()
})
.then(nextAuthOptions => {
  // Pass Next.js App instance and NextAuth options to NextAuth
  // Note We do not pass a port in nextAuthOptions, because we want to add some
  // additional routes before Express starts (if you do pass a port, NextAuth
  // tells NextApp to handle default routing and starts Express automatically).
  return nextAuth(app, nextAuthOptions)
})
.then((nextAuthOptions) => {
  const express = nextAuthOptions.express
  const server = nextAuthOptions.expressApp
  // const server = express()
  server.use(compression())

  Router.forEachPrettyPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
    app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
  ))

  server.get('/listing/:id/*', (req, res) => {
    const actualPage = '/listing'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/market/:tag', (req, res) => {
    // console.log("-------");
    // console.log('req.query',req.query);
    // console.log('req.params',req.params);
    const actualPage = '/market'
    const queryParams = Object.assign({}, req.query, req.params) //{ tag: req.params.tag }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/cat/**', (req, res) => {
    // console.log("-------");
    // console.log(req);
    // console.log('req.query', req.query);
    // console.log('req.params', req.params['0']);
    const actualPage = '/cat'
    let queryParams = {}
    try {
      queryParams = { path: req.params['0'].replace(/\//g, '.') }
    } catch (e) {

    }
    app.render(req, res, actualPage, queryParams)
  })

  server.use('/api', proxy({ target: 'http://localhost:4000', changeOrigin: true }))

  server.get('*', (req, res) => handle(req, res))

  server.listen(5000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:5000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
