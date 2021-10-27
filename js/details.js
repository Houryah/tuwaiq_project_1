$(document).ready(function () {
  let saudi = sessionStorage.getItem('name');
  $('#' + saudi).removeClass('hidden');
  // $("#neom")
})



$('.btn').click(function () {
  if ($('.btn').attr('clicked') == "true") {
    $('.btn').css("background-color", "grey");
    $('.btn').attr('clicked', false)
  } else {
    $('.btn').css("background-color", "yellow");
    $('.btn').attr('clicked', true)

  }
});