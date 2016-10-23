$(document).ready(function(){
  setInterval(function(){
    // var funjson = $.ajax('http://www.reddit.com/r/funny.json?jsonp=?').done(function(r) {
    // });
    // console.log(funjson);
    $.getJSON("http://www.reddit.com/hot.json?jsonp=?", function(data){
      console.log(data);
      $('#images').html('');

      $.each(data.data.children, function(i, item){
        setInterval(function(){
          $('#maindisplay').attr('src', item.data.url);
        }, 5000)

      })// end of data
      // $.each(data.data.children, function(i, item){
      //   $('<img class="ring" />').attr("src", item.data.url).appendTo('#images');
      // })// end of data
    }) //end of getJSON

  }, 10000)// End of set interval, 1000 = 1 second


}); // End of document ready
