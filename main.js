$(document).ready(function () {
  var messages = ['Hello Molly', 'Hello Lolly', 'Hello Dolly'];
  var index = -1;
  var $changedTitle = $('#changed-title');

  setInterval(function () {
    //get the message at the next index, modding by the length so it wraps
    var message = messages[++index % messages.length];
    $changedTitle.text(message);
  }, 1000);
});

(function () {
  function slideshow(container) {
    var imgLen = document.getElementById(container);
    var images = imgLen.getElementsByTagName('img');
    var counter = 1;

    if (counter <= images.length) {
      setInterval(function () {
        images[0].src = images[counter].src;
        console.log(images[counter].src);
        counter++;

        if (counter === images.length) {
          counter = 1;
        }
      }, 10);
    }
  }

  slideshow('imgGallary1');
  slideshow('imgGallary2');
})();

$('.round').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.arrow').toggleClass('bounceAlpha');
});


var vid = document.getElementById("myVideo"); 

function playVid() { 
  vid.play(); 
} 

