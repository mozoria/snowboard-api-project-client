'use strict'

const showSnowboardsTemplate = require('../templates/snowboard-listing.handlebars')

const onGetSnowboardsSuccess = (data) => {
  console.log('here in onGetSnowboardsSuccess')
  console.log(data)
  const showSnowboardsHtml = showSnowboardsTemplate({ snowboards: data })
  $('#snowboardList').html(showSnowboardsHtml)
}

const onCreateSnowboardSuccess = () => {
  $('#snowboardModal-header').text('Successfully Created Snowboard!')
  $('#snowboardModal-header').css('background-color', 'green')
  $('#snowboardModal-form').get(0).reset()
  setTimeout(() => {
    $('#snowboardModal-header').text('Add New Snowboard')
    $('#snowboardModal-header').css('background-color', 'white')
  }, 3000)
}

// const onGetSnowboardsSuccess = snowboards => {
//   if (snowboards.length) {
//     snowboards.forEach(board => {
//       $('#snowboardList')
//         .append(`<li>
//                   <p>Name: ${board.name}</p>
//                   <p>Designer: ${board.designer}</p>
//                   <p>Color: ${board.color}</p>
//                 </li>`)
//     })
//   }
// }

const updateSnowboardSuccess = data => {
  $('.update-delete').text('You successfuly updated one of your snowboards!')
  $('form').trigger('reset')
  $('.update-delete').fadeIn().fadeOut(1500)
}
const deleteSnowboardSuccess = () => {
  $('.update-delete').text('You successfuly deleted one of your snowboards!')
  $('form').trigger('reset')
  $('.update-delete').fadeIn().fadeOut(1500)
}

const deleteSnowboardFailure = () => {
  $('.update-delete').text('Something went wrong try again.')
  $('form').trigger('reset')
  $('.update-delete').fadeIn().fadeOut(1500)
}

const updateSnowboardFailure = () => {
  $('.update-delete').text('Something went wrong try again.')
  $('form').trigger('reset')
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
