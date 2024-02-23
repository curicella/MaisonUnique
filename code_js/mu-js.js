 $('.carousel').carousel({
    pause: "false"
});

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  document.getElementById("mySidepanel").style.height = "350px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}