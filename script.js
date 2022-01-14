window.addEventListener("load", setup,false);

function setup() {
  var video = document.getElementById("video");
  video.setAttribute('playsinline', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');
  video.style.width = '50%';
  video.style.height = '100%';
  var video2 = document.getElementById("video2");
  video2.setAttribute('playsinline', '');
  video2.setAttribute('autoplay', '');
  video2.setAttribute('muted', '');
  video2.style.width = '50%';
  video2.style.height = '100%';
  /* Setting up the constraint */
  var facingMode = "environment"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
  var constraints = {
    audio: false,
    video: {
     facingMode: facingMode
    }
  };

  /* Stream it to video element */
  navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
    video2.srcObject = stream;
  }); 
}

function fullscreen() {
  var elem = document.getElementById("fullscreenWrap");
  if (elem.requestFullscreen) {
    console.log("USING Generic");
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    console.log("USING Safari");
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    console.log("USING IExplore 11");
    elem.msRequestFullscreen();
  } else {
      console.log("No fullscreen method");
  }
}