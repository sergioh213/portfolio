// console.log("sanity");

function scroll_top() {
    window.scrollBy(0, -99999);
}

var submitButton = document.getElementById('send-mail-button')
submitButton.addEventListener("click", function(e){
    e.preventDefault()
    axios.post("/mail", {
        name: document.querySelector("input[name=name]").value,
        company: document.querySelector("input[name=company]").value,
        email: document.querySelector("input[name=email]").value,
        phone: document.querySelector("input[name=phone]").value,
        message: document.querySelector("textarea[name=message]").value
    }).then(function(resp){
        var mailModal = document.getElementById("mail")
        mailModal.style.display = "none"
        if (resp.data.success) {
            var messageModal = document.getElementById('message-modal')
            messageModal.style.display = "block"
            document.querySelector("input[name=name]").value = null
            document.querySelector("input[name=company]").value = null
            document.querySelector("input[name=email]").value = null
            document.querySelector("input[name=phone]").value = null
            document.querySelector("textarea[name=message]").value = null
            setTimeout(function(){
                messageModal.style.display = "none"
                resp.data.success = false
            }, 2000)
        } else {
        }
    })
})

setTimeout(function(){
    var me = document.getElementById("me-image").clientWidth
    var modalWidth = document.body.clientWidth - me
    var mailModal = document.getElementById("mail")
    var aboutModal = document.getElementById("about")
    var form = document.getElementById("mail-form")
    var paragraph = document.getElementById("about-paragraph")
    var message = document.getElementById("message-modal")
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
        ///////// message ///////
        message.style.width = ""
        message.style.left = modalWidth + "px"
        message.style.right = 0 + "px"
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
        ///////// message ///////
        message.style.left = 0 + "px"
        message.style.right = null
        message.style.width = modalWidth + "px"
    }
    if (document.body.clientWidth <= 1128) {
        mailModal.style.left = 0 + "px"
        aboutModal.style.left = 0 + "px"
        message.style.left = 0 + "px"
        // message.style.top = 70 + "%"
    }
    if (document.body.clientWidth <= 585) {
        ///////// mail ///////
        mailModal.style.left = null
        mailModal.style.right = null
        mailModal.style.width = null
        form.style.width = null
        ///////// about me ///////
        aboutModal.style.left = null
        aboutModal.style.right = null
        aboutModal.style.width = null
        paragraph.style.width = null
        ///////// message ///////
        message.style.left = null
        message.style.top = null
        message.style.width = null
    }
}, 100)

function screenResize() {
    var me = document.getElementById("me-image").clientWidth
    var modalWidth = document.body.clientWidth - me
    var mailModal = document.getElementById("mail")
    var aboutModal = document.getElementById("about")
    var form = document.getElementById("mail-form")
    var paragraph = document.getElementById("about-paragraph")
    var message = document.getElementById("message-modal")
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
        ///////// message ///////
        message.style.width = ""
        message.style.left = modalWidth + "px"
        message.style.right = 0 + "px"
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
        ///////// message ///////
        message.style.left = 0 + "px"
        message.style.right = null
        message.style.width = modalWidth + "px"
    }
    if (document.body.clientWidth <= 1128) {
        mailModal.style.left = 0 + "px"
        aboutModal.style.left = 0 + "px"
        message.style.left = 0 + "px"
        // message.style.top = 70 + "%"
    }
    if (document.body.clientWidth <= 585) {
        ///////// mail ///////
        mailModal.style.left = null
        mailModal.style.right = null
        mailModal.style.width = null
        form.style.width = null
        ///////// about me ///////
        aboutModal.style.left = null
        aboutModal.style.right = null
        aboutModal.style.width = null
        paragraph.style.width = null
        ///////// message ///////
        message.style.left = null
        message.style.top = null
        message.style.width = null
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
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
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
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
  timer = setTimeout(moveKitties, 6000)
}

function project5() {
  var kitties = document.getElementsByClassName('project5kitty');
  var dots = document.getElementsByClassName('project5dot');
  var container = document.getElementById('kitties-5');
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
      if (finishX < startX) {
          if (isTransitioning == false) {
            moveKitties();
          }
      }
      clearTimeout(timer);
  });
  timer = setTimeout(moveKitties, 3700)
}

function project6() {
  var kitties = document.getElementsByClassName('project6kitty');
  var dots = document.getElementsByClassName('project6dot');
  var container = document.getElementById('kitties-6');
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
project5()
project6()

var project1I = document.getElementById("co-living-i")
var project1X = document.getElementById("co-living-x")
var project1P = document.getElementById("co-living-p")
var project1Down = document.getElementById("co-living-down")
var project1Up = document.getElementById("co-living-up")
var carrousel1 = document.getElementById("kitties-1")

project1I.addEventListener("click", function(){
    project1P.style.display = "block"
    project1X.style.display = "inline"
    project1I.style.display = "none"
})
project1X.addEventListener("click", function(){
    project1P.style.display = "none"
    project1X.style.display = "none"
    project1I.style.display = "inline-block"
})
project1Down.addEventListener("click", function(){
    carrousel1.style.display = "block"
    project1Up.style.display = "inline-block"
    project1Down.style.display = "none"
    // project1()
})
project1Up.addEventListener("click", function(){
    carrousel1.style.display = "none"
    project1Up.style.display = "none"
    project1Down.style.display = "inline-block"
})

var project2I = document.getElementById("social-network-i")
var project2X = document.getElementById("social-network-x")
var project2P = document.getElementById("social-network-p")
var project2Down = document.getElementById("social-network-down")
var project2Up = document.getElementById("social-network-up")
var carrousel2 = document.getElementById("kitties-2")

project2I.addEventListener("click", function(){
    project2P.style.display = "block"
    project2X.style.display = "inline"
    project2I.style.display = "none"
})
project2X.addEventListener("click", function(){
    project2P.style.display = "none"
    project2X.style.display = "none"
    project2I.style.display = "inline-block"
})
project2Down.addEventListener("click", function(){
    carrousel2.style.display = "block"
    project2Up.style.display = "inline-block"
    project2Down.style.display = "none"
    // project2()
})
project2Up.addEventListener("click", function(){
    carrousel2.style.display = "none"
    project2Up.style.display = "none"
    project2Down.style.display = "inline-block"
})

var project3I = document.getElementById("petition-i")
var project3X = document.getElementById("petition-x")
var project3P = document.getElementById("petition-p")
var project3Down = document.getElementById("petition-down")
var project3Up = document.getElementById("petition-up")
var carrousel3 = document.getElementById("kitties-3")

project3I.addEventListener("click", function(){
    project3P.style.display = "block"
    project3X.style.display = "inline"
    project3I.style.display = "none"
})
project3X.addEventListener("click", function(){
    project3P.style.display = "none"
    project3X.style.display = "none"
    project3I.style.display = "inline-block"
})
project3Down.addEventListener("click", function(){
    carrousel3.style.display = "block"
    project3Up.style.display = "inline-block"
    project3Down.style.display = "none"
    // project3()
})
project3Up.addEventListener("click", function(){
    carrousel3.style.display = "none"
    project3Up.style.display = "none"
    project3Down.style.display = "inline-block"
})

var project4I = document.getElementById("image-board-i")
var project4X = document.getElementById("image-board-x")
var project4P = document.getElementById("image-board-p")
var project4Down = document.getElementById("image-board-down")
var project4Up = document.getElementById("image-board-up")
var carrousel4 = document.getElementById("kitties-4")

project4I.addEventListener("click", function(){
    project4P.style.display = "block"
    project4X.style.display = "inline"
    project4I.style.display = "none"
})
project4X.addEventListener("click", function(){
    project4P.style.display = "none"
    project4X.style.display = "none"
    project4I.style.display = "inline-block"
})
project4Down.addEventListener("click", function(){
    carrousel4.style.display = "block"
    project4Up.style.display = "inline-block"
    project4Down.style.display = "none"
    // project4()
})
project4Up.addEventListener("click", function(){
    carrousel4.style.display = "none"
    project4Up.style.display = "none"
    project4Down.style.display = "inline-block"
})

var project5I = document.getElementById("the-food-market-i")
var project5X = document.getElementById("the-food-market-x")
var project5P = document.getElementById("the-food-market-p")
var project5Down = document.getElementById("the-food-market-down")
var project5Up = document.getElementById("the-food-market-up")
var carrousel5 = document.getElementById("kitties-5")

project5I.addEventListener("click", function(){
    project5P.style.display = "block"
    project5X.style.display = "inline"
    project5I.style.display = "none"
})
project5X.addEventListener("click", function(){
    project5P.style.display = "none"
    project5X.style.display = "none"
    project5I.style.display = "inline-block"
})
project5Down.addEventListener("click", function(){
    carrousel5.style.display = "block"
    project5Up.style.display = "inline-block"
    project5Down.style.display = "none"
    // project5()
})
project5Up.addEventListener("click", function(){
    carrousel5.style.display = "none"
    project5Up.style.display = "none"
    project5Down.style.display = "inline-block"
})

var project6I = document.getElementById("three-js-i")
var project6X = document.getElementById("three-js-x")
var project6P = document.getElementById("three-js-p")
var project6Down = document.getElementById("three-js-down")
var project6Up = document.getElementById("three-js-up")
var carrousel6 = document.getElementById("kitties-6")

project6I.addEventListener("click", function(){
    project6P.style.display = "block"
    project6X.style.display = "inline"
    project6I.style.display = "none"
})
project6X.addEventListener("click", function(){
    project6P.style.display = "none"
    project6X.style.display = "none"
    project6I.style.display = "inline-block"
})
project6Down.addEventListener("click", function(){
    carrousel6.style.display = "block"
    project6Up.style.display = "inline-block"
    project6Down.style.display = "none"
    // project6()
})
project6Up.addEventListener("click", function(){
    carrousel6.style.display = "none"
    project6Up.style.display = "none"
    project6Down.style.display = "inline-block"
})
