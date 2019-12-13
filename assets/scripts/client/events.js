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
const onGetSnowboards = () => {
  api.getSnowboards()
    .then(({snowboards}) => {
      // res.snowboards
      ui.onGetSnowboardsSuccess(snowboards)
    })
    .catch((err) => {
      console.log(err)
    })
}

const onCloseSnowboardList = () => {
  ui.onCloseSnowboardListSuccess()
}

const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#snowboardModal').on('submit', onCreateSnowboard)
  $('#getSnowboards').on('click', onGetSnowboards)
  $('#closeSnowboardList').on('click', onCloseSnowboardList)
}

module.exports = {
  addHandlers
}
