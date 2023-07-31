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
