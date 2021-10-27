$(document).ready(function () {
    let saudi = sessionStorage.getItem('name');
    $('#' + saudi).removeClass('hidden');
    // $("#neom")
  })




  
  
$('#bttn').click(function(){
  if ($('.btn').attr('clicked')=="true") {
$('#bttn').css("background-color" ,"grey");
$('#bttn').attr('clicked',false)
  }else{
$('#bttn').css("background-color" ,"yellow");
$('#bttn').attr('clicked',true)

  }
});



  









