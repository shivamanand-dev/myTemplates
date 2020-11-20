window.onscroll = () => {
  const nav = document.querySelector("#headerNav");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};

var i = 0;
var txt =
  "I'm here to showcase some layouts that I've designed in my learning journey.";
var speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("heroCol2").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
