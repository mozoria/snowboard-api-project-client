'use strict'

// const store = require('../store')
// const onSignUpSuccess = () => {
//   onSuccess('You successfuly signed up! Now, sign in.')
// }
//
// const onSignUpFailure = () => {
//   onFailure('Something went wrong, try again.')
// }

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
  $('form').trigger('reset')
}
const deleteSnowboardSuccess = () => {
  $('#results').html('<p>deleted a snowboard</p>')
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
