import "./style.css";
function displayHash() {
  let theHash = window.location.hash;
  if (theHash.length == 0) {
    theHash = "_index";
  }
  let elems = document.querySelectorAll("#caption");
  elems[0].innerText = "Current Hash: " + theHash;
  return true;
}

document.querySelector("#mainContainer").innerHTML = `
<!--comments in html-->
<!--aquí el html que insertas a dentro de #main-->

<h1 id='caption'></h1>
<a href="#">Home</a><hr>
<a href="#js">JavaScript</a><a href="#python">Python</a><a href="#php">PHP</a><a href="#java">Java</a><hr>
<a href="#angular">Angular</a><a href="#vuejs">Vue.js</a><a href="#ember">Ember</a><a href="#react">React</a>

`;

window.addEventListener("hashchange", function () {
  console.log("hashchange event");
  displayHash();
});
window.addEventListener("DOMContentLoaded", function (ev) {
  console.log("DOMContentLoaded event");
  displayHash();
});