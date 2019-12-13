'use strict'

// const store = require('../store')

const onCreateSnowboardSuccess = () => {
  $('#snowboardModal-header').text('Successfully Created Snowboard!')
  $('#snowboardModal-header').css('background-color', 'green')
  $('#snowboardModal-form').get(0).reset()
  setTimeout(() => {
    $('#snowboardModal-header').text('Add New Snowboard')
    $('#snowboardModal-header').css('background-color', 'white')
  }, 3000)
}

const onGetSnowboardsSuccess = snowboards => {
  if (snowboards.length) {
    snowboards.forEach(board => {
      $('#snowboardList')
        .append(`<li>
                  <p>Name: ${board.name}</p>
                  <p>Designer: ${board.designer}</p>
                  <p>Color: ${board.color}</p>
                </li>`)
    })
  }
}

const updateSnowboardSuccess = data => {
  $('snowboard-update-id').text('Successfully Created Snowboard!')
  $('form').trigger('reset')
}
const deleteSnowboardSuccess = () => {

}

const deleteSnowboardFailure = error => {
  console.error(error)
}

const updateSnowboardFailure = error => {
  console.error(error)
}

const onCloseSnowboardListSuccess = () => {
  $('#snowboardList').empty()
}

const onGetSnowboardsFailure = () => {
  $('#snowboardModal2-form').get(0).reset()
}

const onCreateSnowboardFailure = () => {
  $('#snowboardModal-form').get(0).reset()
}

module.exports = {
  onCreateSnowboardSuccess,
  onCreateSnowboardFailure,
  onGetSnowboardsSuccess,
  onGetSnowboardsFailure,
  onCloseSnowboardListSuccess,
  updateSnowboardSuccess,
  updateSnowboardFailure,
  deleteSnowboardSuccess,
  deleteSnowboardFailure
}
