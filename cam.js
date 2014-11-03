window.addEventListener('DOMContentLoaded', function() {
  video = document.getElementById('video');
  videoObj = { "video": true },
  errBack = function(error) {
    console.log("Video capture error: ", error.code);
  };
  navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;

  // Put video listeners into place
  //if(navigator.getUserMedia) {
    navigator.getUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream) || window.webkitURL.createObjectURL(stream) || stream;
      video.play();
      /*for (i = 0; i < 100; i++) {
        setTimeout(function(){
          video = document.getElementById('video');
          $( "body" ).append( "<canvas id='canvas" + i + "' width='40px' height='30px'></canvas>" );
          var canvas = document.getElementById("canvas" + i);
          context = canvas.getContext("2d");
          context.drawImage(video, 0, 0, 40, 30);
          console.log('aaa' + i);
        }, 500 * i);
      };*/
    }, errBack);
    var button = document.getElementById('button');
    button.onclick = function() {
      //$("body").append("<canvas id='photo' width='320px' height='240px'></canvas>");
      var photo = document.getElementById('photo');
      context = photo.getContext('2d');
      context.drawImage(video, 0, 0, 320, 240);
      $('#photo').css({
        '-webkit-filter': "grayscale(100%)",
        '-webkit-filter': "contrast(0.1)",
        '-webkit-filter': "sepia(" + $("#sepia").value + "%)",
      });
    };
    var aaa = document.getElementById('sepia');
    function updateSepia(val) {
      document.getElementById('sepiaOutput').value = val;
    };
    $('#sepia').onchange= updateSepia(aaa.value);
  //}
  /*else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
      for (i = 0; i < 100; i++) {
        setTimeout(function(){
          video = document.getElementById('video');
          $( "body" ).append( "<canvas id='canvas" + i + "' width='40px' height='30px'></canvas>" );
          var canvas = document.getElementById("canvas" + i);
          context = canvas.getContext("2d");
          context.drawImage(video, 0, 0, 40, 30);
          console.log('aaa' + i);
        }, 500 * i);
      };
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) {
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
      for (i = 0; i < 100; i++) {
        setTimeout(function(){
          video = document.getElementById('video');
          $( "body" ).append( "<canvas id='canvas" + i + "' width='40px' height='30px'></canvas>" );
          var canvas = document.getElementById("canvas" + i);
          context = canvas.getContext("2d");
          context.drawImage(video, 0, 0, 40, 30);
          console.log('aaa' + i);
        }, 500 * i);
      };
    }, errBack);
  }*/
}, false)
/*$('#button').addEventListener('click', function() {
  $("body").append("<canvas id='photo' width='320px' height='240px'></canvas>");
  context = $('photo').getContext('2d');
  context.drawImage(video, 0, 0, 320, 240);
}, false);*/
$('#button').onclick = function (){
}