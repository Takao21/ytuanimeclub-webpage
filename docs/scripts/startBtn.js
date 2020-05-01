var btn = document.getElementsByClassName("startbtn")[0];

var offsetY = document.getElementById("contents").offsetTop;
btn.addEventListener('click', () => {
  var currentPosition = window.pageYOffset;
  anime({
    targets: "html, body",
    scrollTop: [currentPosition, "+=" + (offsetY-currentPosition)],
    duration: 1000,
    easing: "easeOutQuad"
  })
});
