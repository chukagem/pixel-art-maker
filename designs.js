// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



function makeGrid() {
const rows = $('#inputHeight').val();
const columns = $('#inputWidth').val();
const myTable = $("#pixelCanvas");

// Your code goes here!
//create the grid
$("tr").remove();
for (let i = 1; i <= rows; i++) {
    myTable.append("<tr></tr>");
    for (let j = 1; j <= columns; j++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
//add color to the cells on clicking
var $on_off = true;
var cellColor;
myTable.on('click','td', function(event){
  event.preventDefault();

  if($on_off){
    cellColor = $('#colorPicker').val();
    $(this).css('background-color', cellColor);

  }
  else{
    $(this).css('background-color', 'inherit');
    
  }
  $on_off = !$on_off;
  });
}

//call the makeGrid function on submit
$(document).ready(
  $("#sizePicker").submit(function (event) {
    event.preventDefault();
    makeGrid();
  }));
