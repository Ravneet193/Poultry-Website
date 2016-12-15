$(document).ready(function() {
  /* grabs URL from HREF attribute then adds an  */
  /* ID from the DIV I want to grab data from    */
  var myUrl = "AboutUs.html";
  $("#Content").load(myUrl);
  return false;
});

$("#OurProducts").click(function() {
  /* grabs URL from HREF attribute then adds an  */
  /* ID from the DIV I want to grab data from    */
  var myUrl = $(this).attr("href");
  $("#Content").load(myUrl);
  return false;
});

$("#AboutUs").click(function() {
  /* grabs URL from HREF attribute then adds an  */
  /* ID from the DIV I want to grab data from    */
  var myUrl = $(this).attr("href");
  $("#Content").load(myUrl);
  return false;
});

$("#Gallery").click(function() {
  var myUrl = $(this).attr("href");
  $("#Content").load(myUrl);
  return false;
});

$("#ContactUs").click(function() {
  /* grabs URL from HREF attribute then adds an  */
  /* ID from the DIV I want to grab data from    */
  var myUrl = $(this).attr("href");
  $("#Content").load(myUrl);
  return false;
});

/*$('#OurProducts').click(function(){
	event.preventDefault();
	$.ajax({
		url: 'OurProducts.html',
		success: function(data){
			$('#Content').html(data);
		}
	})
})

$('#AboutUs').click(function(){
	event.preventDefault();
	$.ajax({
		url: 'AboutUs.html',
		success: function(data){
			$('#Content').html(data);
		}
	})
})

$('#Gallery').click(function(){
	event.preventDefault();
	$.ajax({
		url: 'Gallery.html',
		success: function(data){
			$('#Content').html(data);
		}
	})
})

$('#ContactUs').click(function(){
	event.preventDefault();
	$.ajax({
		url: 'ContactUs.html',
		success: function(data){
			$('#Content').html(data);
		}
	})
})*/