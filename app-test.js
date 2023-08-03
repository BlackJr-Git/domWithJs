const buttonRemove = document.getElementById("btn-remove");
const buttonAdd = document.getElementById("btn-add");
const compteur = document.getElementById("compteur");
const buttonReset = document.getElementById("btn-reset");



function remove() {
  if (compteur.innerText > 0 || compteur.innerText == "") {
    compteur.innerText = compteur.innerText - 1;
  }
}

function reset() {
  compteur.innerText = 0;
}

buttonAdd.onclick = function add() {
  compteur.innerText = parseInt(compteur.innerText) + 1;
  compteur.style.transition = "10s";
} ;

buttonReset.addEventListener("click", reset);
// buttonAdd.addEventListener("click", add);
buttonRemove.addEventListener("click", remove);

const compteur2 = document.getElementById("compteur2");
const btnStart = document.getElementById("btn-start");

function ajout(compteur2) {
  // for (let i = 10; i <= 70; i++) {
  //   compteur2.style.width = compteur2.style.width = `${i}%`;
  // }
  compteur2.style.width = compteur2 + '%'
}

setTimeout(function () {
  ajout(50);
}, 2000);

btnStart.addEventListener("click", ajout);


const progressBar = document.getElementById('progress');

function updateProgressBar(progress) {
  progressBar.style.width = progress + '%';
}

setTimeout(function() {
  updateProgressBar(70);
}, 2000);
 

