const express = require('express')
const next = require('next')
const Router = require('./routes').Router

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './src' })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()


  Router.forEachPrettyPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
    app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
  ))

  server.get('/listing/:id/*', (req, res) => {
    const actualPage = '/listing'
    const queryParams = { id: req.params.id }
    console.log(actualPage, queryParams);
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
