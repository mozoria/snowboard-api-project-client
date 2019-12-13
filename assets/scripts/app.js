'use strict'

const authEvents = require('./auth/events')
const clientEvents = require('./client/events')

$(() => {
  authEvents.addHandlers()
  clientEvents.addHandlers()
})
