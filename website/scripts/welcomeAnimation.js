var letters = document.getElementsByClassName("letters");
for(let i = 0; i < letters.length; i++) {
  letters[i].innerHTML = letters[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
}

anime.timeline({loop: false})
  .add({
    targets: '.movingletter',
    opacity: 1,
    during: 100
  })
  .add({
    targets: '.movingletter .letter',
    rotateY: [-90, 0],
    duration: 1200,
    delay: (x, i) => 110 * i
  })
  .add({
    targets: '.welcome_moral',
    opacity: 1,
    duration: 600,
    easing: "easeOutSine"
  })
  .add({
    targets: '.startbtn',
    opacity: 1,
    duration: 700,
    easing: "easeOutSine"
  });


//Easter Egg Padoru
var currentDate = new Date();
if (currentDate.getMonth() === 11) {
  document.getElementById("padoru").style.display = "block";
  anime.timeline({loop: true})
      .add({
        targets: '#padoru',
        rotateY: [720, 0],
        duration: 2000,
        easing: "linear",
        delay: 2500
      })
}

console.log("WEB GHOST: 'Legends say a Padoru appears on this webpage during Decembers...'")
