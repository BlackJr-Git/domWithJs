const buttonRemove = document.getElementById("btn-remove");
const buttonAdd = document.getElementById("btn-add");
const compteur = document.getElementById("compteur");
const buttonReset = document.getElementById("btn-reset")




function add() {
  compteur.innerText = parseInt(compteur.innerText) + 1;
}

function remove() {
  if (compteur.innerText > 0 || compteur.innerText == "") {
    compteur.innerText = compteur.innerText - 1;
  }
}

function reset(){
  compteur.innerText = 0
}

buttonReset.addEventListener("click", reset)
buttonAdd.addEventListener("click", add);
buttonRemove.addEventListener("click", remove);


const compteur2 = document.getElementById("compteur2");
const btnStart = document.getElementById("btn-start")

function ajout(){
  // for (let index = 0 ; index < 70 ; index++) {
  //   compteur2.style.width = parseInt(compteur2.style.width) + 1
  // }

  compteur2.style.width = '70%'
}

btnStart.addEventListener('click', ajout)