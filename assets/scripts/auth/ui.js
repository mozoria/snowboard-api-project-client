'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
  $('form').trigger('reset')
  $('#message').fadeOut(2000)
}

const onFailure = message => {
  $('#message')
    .removeClass('success')
    .addClass('failure')
    .text(message)
  $('form').trigger('reset')
  $('#message').fadeOut(2000)
}

const onSignUpSuccess = () => {
  onSuccess('You successfuly signed up! Now, sign in.')
}

const onSignUpFailure = () => {
  onFailure('Something went wrong, try again.')
}

const onSignInSuccess = responseData => {
  store.user = responseData.user
  onSuccess('You successfuly signed in!')
  $('.after-auth').show()
  $('.before-auth').hide()
}

const onSignInFailure = () => {
  onFailure('Something went wrong, try again.')
}

const onChangePasswordSuccess = responseData => {
  onSuccess('You successfuly changed passsword!')
}

const onChangePasswordFailure = () => {
  onFailure('Something went wrong, try again.')
}

const onSignOutSuccess = responseData => {
  onSuccess('You successfuly logged out!')
  store.user = {}
  $('.after-auth').hide()
  $('.before-auth').show()
}

const onSignOutFailure = () => {
  onFailure('Something went wrong, try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
