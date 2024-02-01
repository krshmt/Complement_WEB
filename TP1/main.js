
let listeDeLangages = ["Javascript", "CSS"];
function remplacerMilieuTableau(tableau, nouveauLangage) {
    tableau[Math.floor(tableau.length / 2)] = nouveauLangage;
}

function updateListeLangages(paragraph) {
    paragraph.textContent = "Liste de langages: " + listeDeLangages.join(", ");
}

document.getElementById('action').addEventListener('click', function() {
    let valeur = document.getElementById('input-langages').value;
    listeDeLangages.push(valeur);
    updateListeLangages(document.querySelector('.liste-langages'));
    document.getElementById('input-langages').value = "";
});

document.getElementById('action2').addEventListener('click', function() {
    listeDeLangages.pop();
    updateListeLangages(document.querySelector('.liste-langages'));
});

document.getElementById('action3').addEventListener('click', function() {
    let valeur = document.getElementById('input-langages').value;
    remplacerMilieuTableau(listeDeLangages, valeur);
    updateListeLangages(document.querySelector('.liste-langages'));
});

updateListeLangages(document.querySelector('.liste-langages')); 