$(function(){

        $.getJSON("https://www.reddit.com/r/programming.json", function(response, status, jqXHR){
        // $('.links').eq(0).find('p').eq(0).html(jqXHR.responseText);
           var i= 0
           for (i=0; i < 25; i++){
          $("#links").append("<p>" + response.data.children[i].data.title +"</p>");
          };
        });


      });

