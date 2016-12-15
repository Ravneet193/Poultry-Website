$(document).ready(function() {
  /* grabs URL from HREF attribute then adds an  */
  /* ID from the DIV I want to grab data from    */
  var myUrl = "DayOldChicks.html";
  $("#ProductInfo").load(myUrl);
  return false;
});

$("#DayOldChicks").click(function() {
  var myUrl = $(this).attr("href");
  $("#ProductInfo").load(myUrl);
  return false;
});

$("#HatchingEggs").click(function() {
  var myUrl = $(this).attr("href");
  $("#ProductInfo").load(myUrl);
  return false;
});

