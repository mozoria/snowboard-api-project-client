'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateSnowboard = event => {
  event.preventDefault()
  const form = event.target
  console.log(form)
  const formData = getFormFields(form)
  api.createSnowboard(formData)
    .then((res) => {
      ui.onCreateSnowboardSuccess()
    })
    .catch((err) => {
      console.log(err)
    })
}

const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#snowboardModal').on('submit', onCreateSnowboard)
}

module.exports = {
  addHandlers
}
