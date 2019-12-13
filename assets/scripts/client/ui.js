'use strict'

const store = require('../store')
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

const onCreateSnowboardFailure = () => {
  $('#snowboardModal-form').get(0).reset()
}

module.exports = {
  onCreateSnowboardSuccess,
  onCreateSnowboardFailure
}
