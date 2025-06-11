document.addEventListener("DOMContentLoaded", function () {
  // Effet de machine à écrire
  const container = document.querySelector(".container");

  if (container) {
    const intro = document.createElement("h1");
    intro.classList.add("cursor"); // Ajoute un effet de curseur (si stylé en CSS)
    container.appendChild(intro);

    const texte = "Bienvenue sur mon portfolio";
    let index = 0;

    function ecrireIntro() {
      if (index < texte.length) {
        intro.textContent += texte.charAt(index);
        index++;
        setTimeout(ecrireIntro, 100); // Vitesse d’écriture
      } else {
        intro.classList.remove("cursor");
      }
    }

    ecrireIntro();
  };
 // Définition de la fonction navigateTo
function navigateTo(url) {
  window.location.href = url;
}

// Ajout de l'écouteur d'événement
const boutonInscrire = document.getElementById("inscrivez-vous");
if (boutonInscrire) {
  boutonInscrire.addEventListener("click", () => {
    navigateTo("inscription.html"); // Navigue vers inscription.html
  });
}
const boutonSkip = document.getElementById("skip");
if (boutonSkip) {
  boutonSkip.addEventListener("click", () => {
    navigateTo("apropos.html"); // Navigue vers apropos.html
  });
}





});
