function move() {
  var elem = document.getElementById("greenBar");
  var width = 10;
  var id = setInterval(frame, 20);
  function frame() { 
    if (width >= 22) {
      clearInterval(id);
    } else {   width++;
      elem.style.width = width  + '%';  
      elem.innerHTML = width * 1  + '%';
    }
   }
  }