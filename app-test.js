const buttonRemove = document.getElementById("btn-remove");
const buttonAdd = document.getElementById("btn-add");
const compteur = document.getElementById("compteur");
const buttonReset = document.getElementById("btn-reset");

function add() {
  compteur.innerText = parseInt(compteur.innerText) + 1;
  compteur.style.transition = "10s";
}

function remove() {
  if (compteur.innerText > 0 || compteur.innerText == "") {
    compteur.innerText = compteur.innerText - 1;
  }
}

function reset() {
  compteur.innerText = 0;
}

buttonReset.addEventListener("click", reset);
buttonAdd.addEventListener("click", add);
buttonRemove.addEventListener("click", remove);

const compteur2 = document.getElementById("compteur2");
const btnStart = document.getElementById("btn-start");

function ajout() {
  // for (let i = 10; i <= 70; i++) {
  //   compteur2.style.width = compteur2.style.width = `${i}%`;
  // }

  compteur2.style.width = compteur2 + '%'

  

  // compteur2.style.transitionDelay = "10s";

  // let cpt;
  // if (cpt === 0){
  //   compteur2.style.width = "70%";
  //   cpt = 1;
  // } else {
  //   compteur2.style.width = "10%";
  //   cpt = 0;
  // }
}

setTimeout(function () {
  updateajout(50);
}, 2000);

btnStart.addEventListener("click", ajout);


const progressBar = document.getElementById('progress');

function updateProgressBar(progress) {
  progressBar.style.width = progress + '%';
}

setTimeout(function() {
  updateProgressBar(70);
}, 2000);
 