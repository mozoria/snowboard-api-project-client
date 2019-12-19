'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateSnowboard = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createSnowboard(formData)
    .then((res) => {
      ui.onCreateSnowboardSuccess()
    })
    .catch(ui.onCreateSnowboardsFailure)
}

const onGetSnowboards = () => {
  api.getSnowboards()
    .then(({snowboards}) => {
      ui.onGetSnowboardsSuccess(snowboards)
    })
    .catch(ui.onGetSnowboardsFailure)
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
  api.destroySnowboard(id)
    .then(ui.deleteSnowboardSuccess)
    .catch(ui.deleteSnowboardFailure)
}

const onCloseSnowboardList = () => {
  ui.onCloseSnowboardListSuccess()
}

const addHandlers = event => {
  $('#snowboardModal').on('submit', onCreateSnowboard)
  $('#getSnowboards').on('click', onGetSnowboards)
  $('#closeSnowboardList').on('click', onCloseSnowboardList)
  $('#update-snowboard').on('submit', onUpdateSnowboards)
  $('#delete-snowboard').on('submit', onDeleteSnowboard)
}

module.exports = {
  addHandlers
}
