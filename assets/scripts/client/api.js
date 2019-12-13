'use strict'

const config = require('../config')
const store = require('../store')

const createSnowboard = formData => {
  return $.ajax({
    url: config.apiUrl + '/snowboards',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const getSnowboards = () => {
  return $.ajax({
    url: config.apiUrl + '/snowboards',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const updateSnowboard = formData => {
  return $.ajax({
    url: config.apiUrl + '/snowboards/' + formData.snowboard.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const destroySnowboard = id => {
  return $.ajax({
    url: config.apiUrl + '/snowboards/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createSnowboard,
  getSnowboards,
  updateSnowboard,
  destroySnowboard
}
