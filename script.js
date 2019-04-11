$(function(event) {
  console.log("DOM is ready")



  var player1 = prompt("Player 1, take your pick: 'O' or 'X'");

  if (player1 == "X") {
    $("td").on("click", function() {
      console.log("this box was clicked");
      $(this).html("X").css("color", "white").addClass("X");
    })
  } else {
    $("td").on("click", function() {
      console.log("this box was clicked");
      $(this).html("O").css("color", "black").addClass("O");
    })
    $(".playerTurn").html("It is O's turn");
  }


  $("#reset").on("click", function(){
    $("td").html(" ").css("color", "white").css("background", "white");
    console.log("reset");
    player1;
  })










})
