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

module.exports = {
  createSnowboard
}
