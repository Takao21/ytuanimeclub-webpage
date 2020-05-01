$(window).load(function() {
  $(".se-pre-con").fadeOut("slow");
  var my_awesome_script = document.createElement('script');

  my_awesome_script.setAttribute('src', './scripts/welcomeAnimation.js');

  document.body.appendChild(my_awesome_script);

  display_ct();
});


function display_c(){
var refresh=1000; // Refresh rate in milli seconds
mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
var x = new Date();
document.getElementById('dateDisplay').innerHTML = x;
display_c();
 }
