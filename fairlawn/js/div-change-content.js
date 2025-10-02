//ADD REMOVE BTN ACTIVE
$(function() {
  $('.btn-section').click(function() { // when a .myDiv is clicked
    $('.btn-section').not(this).removeClass('active')
    $(this).addClass('active')
  })
})

$(function() {
  $('#btn-process').click(function() { // when a .myDiv is clicked
   // $('.btn-section').not(this).removeClass('active')
    $('#process').addClass('active')
	$('#warranty').removeClass("active")
	$('#services').removeClass("active");
  })
  
   $('#btn-warranty').click(function() { // when a .myDiv is clicked
   // $('.btn-section').not(this).removeClass('active')
    $('#warranty').addClass('active')
	$('#process').removeClass("active")
	$('#services').removeClass("active");
  })
   
   $('#btn-services').click(function() { // when a .myDiv is clicked
   // $('.btn-section').not(this).removeClass('active')
    $('#services').addClass('active')
	$('#warranty').removeClass("active")
	$('#process').removeClass("active");
  })
})

