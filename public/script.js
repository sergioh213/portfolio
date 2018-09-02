console.log("sanity");

function scroll_top() {
    console.log("scroll happening");
    window.scrollBy(0, -99999);
}

document.getElementById("project-list").addEventListener("click", function(e) {
    window.scrollBy(0, 500);
});

var me = document.getElementById("me-image").clientWidth
var modalWidth = document.body.clientWidth - me
var mailModal = document.getElementById("mail")
var aboutModal = document.getElementById("about")
var form = document.getElementById("mail-form")
var paragraph = document.getElementById("about-paragraph")
mailModal.style.width = modalWidth + "px"
aboutModal.style.width = modalWidth + "px"
if (modalWidth <= 250) {
    ///////// mail ///////
    form.style.width = 500 + "px"
    mailModal.style.width = ""
    mailModal.style.left = modalWidth + "px"
    mailModal.style.right = 0 + "px"
    ///////// about me ///////
    paragraph.style.width = 500 + "px"
    aboutModal.style.width = ""
    aboutModal.style.left = modalWidth + "px"
    aboutModal.style.right = 0 + "px"
} else {
    ///////// mail ///////
    mailModal.style.left = 0 + "px"
    mailModal.style.right = null
    mailModal.style.width = modalWidth + "px"
    form.style.width = 100 + "%"
    ///////// about me ///////
    aboutModal.style.left = 0 + "px"
    aboutModal.style.right = null
    aboutModal.style.width = modalWidth + "px"
    paragraph.style.width = 100 + "%"
}
if (document.body.clientWidth <= 1489) {
    if (document.body.clientWidth <= 1378) {
        console.log("exited text reduction width");
    } else {
        console.log("entered text reduction width");
    }
}
if (document.body.clientWidth <= 1128) {
    mailModal.style.left = 0 + "px"
    aboutModal.style.left = 0 + "px"
}

function screenResize() {
    var me = document.getElementById("me-image").clientWidth
    var modalWidth = document.body.clientWidth - me
    var mailModal = document.getElementById("mail")
    var aboutModal = document.getElementById("about")
    var form = document.getElementById("mail-form")
    var paragraph = document.getElementById("about-paragraph")
    // console.log("modalWidth: ", modalWidth);
    if (modalWidth <= 250) {
        ///////// mail ///////
        form.style.width = 500 + "px"
        mailModal.style.width = ""
        mailModal.style.left = modalWidth + "px"
        mailModal.style.right = 0 + "px"
        ///////// about me ///////
        paragraph.style.width = 500 + "px"
        aboutModal.style.width = ""
        aboutModal.style.left = modalWidth + "px"
        aboutModal.style.right = 0 + "px"
    } else {
        ///////// mail ///////
        mailModal.style.left = 0 + "px"
        mailModal.style.right = null
        mailModal.style.width = modalWidth + "px"
        form.style.width = 100 + "%"
        ///////// about me ///////
        aboutModal.style.left = 0 + "px"
        aboutModal.style.right = null
        aboutModal.style.width = modalWidth + "px"
        paragraph.style.width = 100 + "%"
    }
    if (document.body.clientWidth <= 1489) {
        if (document.body.clientWidth <= 1378) {
            console.log("exited text reduction width");
        } else {
            console.log("entered text reduction width");
        }
    }
    if (document.body.clientWidth <= 1128) {
        mailModal.style.left = 0 + "px"
        aboutModal.style.left = 0 + "px"
    }
}

function toggleShowContact() {
    var mailModal = document.getElementById("mail")
    var aboutModal = document.getElementById("about")
    if (mailModal.style.display == "" || mailModal.style.display == "none") {
        mailModal.style.display = "block"
        aboutModal.style.display = "none"
    } else if (mailModal.style.display == "block") {
        mailModal.style.display = "none"
    }
}

function toggleShowAbout() {
    var mailModal = document.getElementById("mail")
    var aboutModal = document.getElementById("about")
    if (aboutModal.style.display == "" || aboutModal.style.display == "none") {
        aboutModal.style.display = "block"
        mailModal.style.display = "none"
    } else if (aboutModal.style.display == "block") {
        aboutModal.style.display = "none"
    }
}

function project1() {
  var kitties = document.getElementsByClassName('project1kitty');
  var dots = document.getElementsByClassName('project1dot');
  var container = document.getElementById('kitties-1');
  var timer;
  var isTransitioning;
  var current = 0;
  var startX;
  var startY;
  var finishX;
  var finishY;

  function moveKitties(next) {
    dots[current].classList.remove('active');
    kitties[current].classList.remove('onscreen');
    isTransitioning = true;
    kitties[current].classList.add('exit');

    if (typeof next != 'undefined'){
      current = next;
    } else {
      current++;
    }
    if (current >= kitties.length){
      current = 0;
    }
    dots[current].classList.add('active');
    kitties[current].classList.add('onscreen');
  }

  container.addEventListener('transitionend', function(e){
    if (e.target.classList.contains('exit')){
      e.target.classList.remove('exit');
      isTransitioning = false;
      timer = setTimeout(moveKitties, 6000);
    }
  })

  for (var i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', eventHandler(i));
  }

  function eventHandler(n){
    return function(e){
      if (e.target.classList.contains('active')){
        return;
      };
      if (isTransitioning){
        return;
      }
      clearTimeout(timer);
      console.log(n)
      moveKitties(n)
    }
  }

  container.addEventListener("touchstart", function(e) {
      console.log("touchstart");
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
  });
  container.addEventListener("touchend", function(e) {
      console.log("touchend");
      finishX = e.changedTouches[0].pageX;
      finishY = e.changedTouches[0].pageY;
      console.log(finishX);
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
  // for (var i = 0; i < dots.length; i++){
  //   dots[i].addEventListener('mouseover', mouseoverhandler(i))
  //   dots[i].addEventListener('mouseout', mouseouthandler(i))
  // }
  //
  // function mouseoverhandler(n){
  //   return function(n){
  //       n.style.backgroundColor = 'grey';
  //       n.style.cursor= 'pointer';
  //     }
  //   }
  // function mouseouthandler(n){
  //   return function(n){
  //     n.style.backgroundColor = '';
  //     n.style.cursor= '';
  //   }
  // }
  timer = setTimeout(moveKitties, 6000)
}

function project2() {
  var kitties = document.getElementsByClassName('project2kitty');
  var dots = document.getElementsByClassName('project2dot');
  var container = document.getElementById('kitties-2');
  var timer;
  var isTransitioning;
  var current = 0;
  var startX;
  var startY;
  var finishX;
  var finishY;

  function moveKitties(next) {
    dots[current].classList.remove('active');
    kitties[current].classList.remove('onscreen');
    isTransitioning = true;
    // console.log('The leaving one is ' + current);
    kitties[current].classList.add('exit');

    if (typeof next != 'undefined'){
      current = next;
    } else {
      current++;
    }
    if (current >= kitties.length){
      current = 0;
    }
    dots[current].classList.add('active');
    // console.log('The one coming on screen is ' + current);
    kitties[current].classList.add('onscreen');
  }

  container.addEventListener('transitionend', function(e){
    if (e.target.classList.contains('exit')){
      e.target.classList.remove('exit');
      isTransitioning = false;
      timer = setTimeout(moveKitties, 6000);
    }
  })

  for (var i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', eventHandler(i));
  }

  function eventHandler(n){
    return function(e){
      if (e.target.classList.contains('active')){
        return;
      };
      if (isTransitioning){
        return;
      }
      clearTimeout(timer);
      console.log(n)
      moveKitties(n)
    }
  }

  container.addEventListener("touchstart", function(e) {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
  });
  container.addEventListener("touchend", function(e) {
      finishX = e.changedTouches[0].pageX;
      finishY = e.changedTouches[0].pageY;
      console.log(finishX);
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
  timer = setTimeout(moveKitties, 6000)
}

function project3() {
  var kitties = document.getElementsByClassName('project3kitty');
  var dots = document.getElementsByClassName('project3dot');
  var container = document.getElementById('kitties-3');
  var timer;
  var isTransitioning;
  var current = 0;
  var startX;
  var startY;
  var finishX;
  var finishY;

  function moveKitties(next) {
    dots[current].classList.remove('active');
    kitties[current].classList.remove('onscreen');
    isTransitioning = true;
    // console.log('The leaving one is ' + current);
    kitties[current].classList.add('exit');

    if (typeof next != 'undefined'){
      current = next;
    } else {
      current++;
    }
    if (current >= kitties.length){
      current = 0;
    }
    dots[current].classList.add('active');
    // console.log('The one coming on screen is ' + current);
    kitties[current].classList.add('onscreen');
  }

  container.addEventListener('transitionend', function(e){
    if (e.target.classList.contains('exit')){
      e.target.classList.remove('exit');
      isTransitioning = false;
      timer = setTimeout(moveKitties, 6000);
    }
  })

  for (var i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', eventHandler(i));
  }

  function eventHandler(n){
    return function(e){
      if (e.target.classList.contains('active')){
        return;
      };
      if (isTransitioning){
        return;
      }
      clearTimeout(timer);
      console.log(n)
      moveKitties(n)
    }
  }

  container.addEventListener("touchstart", function(e) {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
  });
  container.addEventListener("touchend", function(e) {
      finishX = e.changedTouches[0].pageX;
      finishY = e.changedTouches[0].pageY;
      console.log(finishX);
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
  timer = setTimeout(moveKitties, 6000)
}

function project4() {
  var kitties = document.getElementsByClassName('project4kitty');
  var dots = document.getElementsByClassName('project4dot');
  var container = document.getElementById('kitties-4');
  var timer;
  var isTransitioning;
  var current = 0;
  var startX;
  var startY;
  var finishX;
  var finishY;

  function moveKitties(next) {
    dots[current].classList.remove('active');
    kitties[current].classList.remove('onscreen');
    isTransitioning = true;
    // console.log('The leaving one is ' + current);
    kitties[current].classList.add('exit');

    if (typeof next != 'undefined'){
      current = next;
    } else {
      current++;
    }
    if (current >= kitties.length){
      current = 0;
    }
    dots[current].classList.add('active');
    // console.log('The one coming on screen is ' + current);
    kitties[current].classList.add('onscreen');
  }

  container.addEventListener('transitionend', function(e){
    if (e.target.classList.contains('exit')){
      e.target.classList.remove('exit');
      isTransitioning = false;
      timer = setTimeout(moveKitties, 6000);
    }
  })

  for (var i = 0; i < dots.length; i++){
    dots[i].addEventListener('click', eventHandler(i));
  }

  function eventHandler(n){
    return function(e){
      if (e.target.classList.contains('active')){
        return;
      };
      if (isTransitioning){
        return;
      }
      clearTimeout(timer);
      console.log(n)
      moveKitties(n)
    }
  }

  container.addEventListener("touchstart", function(e) {
      startX = e.touches[0].pageX;
      startY = e.touches[0].pageY;
  });
  container.addEventListener("touchend", function(e) {
      finishX = e.changedTouches[0].pageX;
      finishY = e.changedTouches[0].pageY;
      console.log(finishX);
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
  timer = setTimeout(moveKitties, 6000)
}

project1()
project2()
project3()
project4()
