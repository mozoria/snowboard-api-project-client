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

const onUpdateSnowboards = event => {
  event.preventDefault()
  const form = event.target
  const snowboardData = getFormFields(form)

  api.updateSnowboard(snowboardData)
    .then(ui.updateSnowboardSuccess)
    .catch(ui.updateSnowboardFailure)
}

const onDeleteSnowboard = event => {
  event.preventDefault()
  const form = event.target
  const snowboardData = getFormFields(form)
  const id = snowboardData.snowboard.id
  console.log(id)
  api.destroySnowboard(id)
    .then(ui.deleteSnowboardSuccess)
    .catch(ui.deleteSnowboardFailure)
}

const onCloseSnowboardList = () => {
  ui.onCloseSnowboardListSuccess()
}

const addHandlers = event => {
  // $('#sign-up').on('submit', onSignUp)
  $('#snowboardModal').on('submit', onCreateSnowboard)
  $('#getSnowboards').on('click', onGetSnowboards)
  $('#closeSnowboardList').on('click', onCloseSnowboardList)
  $('#update-snowboard').on('submit', onUpdateSnowboards)
  $('#delete-snowboard').on('submit', onDeleteSnowboard)
}

module.exports = {
  addHandlers
}
