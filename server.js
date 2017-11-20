const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {

        //the next application is bootstrapped and we can register our express middleware here...
        const server = express()

        server.get('/', (req, res) => {
            return app.render(req, res, '/', req.query)
        })

        server.get('/account', (req, res) => {
            return app.render(req, res, '/account', req.query)
        })

        server.use("/images", express.static('./images'));
        server.use("/fonts", express.static('./fonts'));

        //   server.get('/posts/:id', (req, res) => {
        //     return app.render(req, res, '/posts', { id: req.params.id })
        //   })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })