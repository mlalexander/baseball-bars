

var playerData;

$(document).ready(function() {
    getData();
});


function getData() {
  $.getJSON("js/carlosgomez.json", function(data) {
    playerData = data;
    drawChart();
  });
}


  function drawChart() {

    $(".name").html(playerData.name);

    $.each(playerData.stats, function(i, item) {
      var width = item.HR * 10;


    $(".chart").append(
        "<div>"+
          "<div class='year'>"+item.year+"</div>"+"<div class='bar' style='width: "+width+"px'></div>"+"<div class='total'>"+item.HR+"</div>"+
        "</div>"
      );
    });

  }
