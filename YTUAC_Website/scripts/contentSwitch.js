function changeActive(contentindex) {
  //background-switch
  let paintarea = document.getElementsByClassName("content-section")[0];
  let activeEl = document.getElementsByClassName("active")[0];
  let allEl = document.getElementsByClassName("content");


  if (contentindex === 1) {
    paintarea.style.backgroundImage = "url(./storage/img/yourname-meteorfall.jpg)"
    activeEl.classList.remove("active");
    allEl[0].classList.add("active");

  }
  else if (contentindex === 2) {
    paintarea.style.backgroundImage = "url(./storage/img/Quinella.png)"
    activeEl.classList.remove("active");
    allEl[1].classList.add("active");

  }
  else if (contentindex === 3) {
    paintarea.style.backgroundImage = "url(./storage/img/hokage-minimalist-wallpaper.jpg)"
    activeEl.classList.remove("active");
    allEl[2].classList.add("active");

  }
  else {
    paintarea.style.backgroundImage = "url(./storage/img/ayanokoji.jpg)"
    activeEl.classList.remove("active");
    allEl[3].classList.add("active");

  }
  switchContent();


}
function switchContent() {
  let allEl = document.getElementsByClassName("content");
  anime.timeline({loop: false})
    .add({
      targets: ".content",
      opacity: 0,
      duration: 700,
      easing: "easeOutSine"
    })
    .add({
      targets: ".active",
      opacity: 1,
      duration: 900,
      easing: "easeOutSine"
    })
}

function reveal() {
  document.getElementById("revealBtn").style.display = "none";
  document.getElementsByClassName("credits")[0].style.display = "block";
}

function myFunction(x) {
  if (x.matches) { // If media query matches
    anime.timeline({loop: false})
    .add({
      targets: ".content",
      opacity: 1,
      easing: "easeOutSine"
    })
  }
  else {
    window.onload(switchContent())
  }
}

var x = window.matchMedia("(max-width: 601px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
