$(function(event) {
  console.log("DOM is ready")



  var player1 = prompt("Player 1, take your pick: 'O' or 'X'");
  // var player2 = prompt("Player 2, take your pick: 'O' or 'X'");

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



//
// $("td").on("click", function(){
//   var boxClicked = $(this).data("position");
//   console.log(boxClicked);
// })

//
// var boxes = $("td");
// for (var i = 0; i < boxes.length; i++) {
//   var box = boxes[i];
//
// console.log(boxes);
// console.log(box);
// }





// $("td").on("click", function() {
//   $(box).each(function(index, box) {
//     var box = boxes[i];
//     $(this).html("X").css("color", "white").addClass("X");
// })
// })


  // $("td").on("click", function() {
  //   console.log("this box was clicked");
  //   $(this).html("X").css("color", "white").addClass("X");
  // })


  // $("td").on("click", function() {
  //   if (player == 1) {
  //     $(this).html("X").css("color", "white").addClass("X");
  //   } else if (player ==2) {
  //     $(this).html("X").css("color", "black").addClass("O");
  //   }   console.log("this box was clicked");;
  // })


   $("tr").addClass("column");
   $("td").addClass("row");

   // $(".row").on("click", function(){
   //   $(this).css("background", "white").html("O");
   // })

// $("table").on("click", function() {
// $(this).rows[2].cells;
//   x[0].innerHTML = "hello";
// })










})
