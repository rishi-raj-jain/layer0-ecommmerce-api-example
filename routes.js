import { products } from './data'
import { Router } from '@layer0/core'

export default new Router()
  .get('/images/:path*', ({ cache, serveStatic }) => {
    cache({ edge: { maxAgeSeconds: 60 * 60 * 24 * 365 }, browser: false })
    serveStatic('images/:path*')
  })
  .get('/products/all', ({ compute, cache }) => {
    cache({ edge: { maxAgeSeconds: 60 * 60 * 24 * 365 }, browser: false })
    compute((req, res) => {
      res.setHeader('content-type', 'application/json')
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET')
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.body = JSON.stringify(products)
      res.statusCode = 200
      res.statusMessage = 'OK'
    })
  })
  .get('/products/:slug', ({ compute, cache }) => {
    cache({ edge: { maxAgeSeconds: 60 * 60 * 24 * 365 }, browser: false })
    compute((req, res) => {
      const { slug } = req.params
      res.setHeader('content-type', 'application/json')
      res.setHeader('Access-Control-Allow-Origin', '*')
      res.setHeader('Access-Control-Allow-Methods', 'GET')
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      res.body = JSON.stringify(products.find((i) => i.slug === slug))
      res.statusCode = 200
      res.statusMessage = 'OK'
    })
  })
