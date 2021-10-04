const app = require('./app')
const router = require('express').Router()

const handle = app.getRequestHandler()

router.route('*').get((req, res) => handle(req, res))

module.exports = router
