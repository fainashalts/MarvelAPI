$(document).ready(function(){
    var random_name;
    console.log("jQuery loaded!");

    $("#append-i").click(function() {
        $(document.body.children).append("<img src='https://pbs.twimg.com/profile_images/1979623485/borat.jpg'>");
    });

    $.getJSON("http://gateway.marvel.com:80/v1/public/characters?nameStartsWith=H&apikey=2f5f5c6cd705b9287fe0c720298c2dd6", function(response, status, jqXHR){
    // $('.links').eq(0).find('p').eq(0).html(jqXHR.responseText);
       var i= 0;
       for (i=0; i < 25; i++){
      $("#links").append("<p>" + response.data.children[i].data.title +"</p>");
      }
    });


});