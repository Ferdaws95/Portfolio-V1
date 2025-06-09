// Définition de la fonction navigateTo
function navigateTo(url) {
  window.location.href = url;
}

const boutonInscriregoogle = document.getElementById("Google");
const boutonInscrirefacebook = document.getElementById("Facebook");
const boutonCreer = document.getElementById("btnCreer");
const popupBienvenue = document.getElementById("popupBienvenue");

if (boutonInscriregoogle) {
  boutonInscriregoogle.addEventListener("click", () => {
    // Afficher le popup
    popupBienvenue.classList.remove("hidden");

    // Attendre 3 secondes puis rediriger
    setTimeout(() => {
    navigateTo("apropos.html"); // Navigue vers apropos.html
    }, 2000);
  });
}
if ( boutonInscrirefacebook) {
  boutonInscrirefacebook.addEventListener("click", () => {
    // Afficher le popup
    popupBienvenue.classList.remove("hidden");

    // Attendre 3 secondes puis rediriger
    setTimeout(() => {
    navigateTo("apropos.html"); // Navigue vers apropos.html
    }, 2000);
  });
}
if (boutonCreer) {
  boutonCreer.addEventListener("click", (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire
    popupBienvenue.classList.remove("hidden");
    setTimeout(() => {
      navigateTo("apropos.html");
    }, 2000);
  });
}