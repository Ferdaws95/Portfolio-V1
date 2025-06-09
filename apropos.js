  document.addEventListener("DOMContentLoaded", function () {
  const sectionSup = document.getElementById("section-supplementaire");
  const bouton = document.getElementById("EnSavoirPlus");

  if (sectionSup) sectionSup.style.display = "none";

  if (bouton && sectionSup) {
    bouton.addEventListener("click", function () {
      sectionSup.style.display = "block";
      sectionSup.scrollIntoView({ behavior: "smooth" });
    });
  }
  const sectionSup1 = document.getElementById("section-supplementaire1");
  const bouton1 = document.getElementById("Competenses");

  if (sectionSup1) sectionSup1.style.display = "none";

  if (bouton1 && sectionSup1) {
    bouton1.addEventListener("click", function () {
      sectionSup1.style.display = "block";
      sectionSup1.scrollIntoView({ behavior: "smooth" });
    });
  }
const competences = [
  {
   
    description: `
      <strong style="color:#d3bb9c;">Langages en Développement Web</strong><br>
      <p>• HTML<br>
      • CSS<br>
      • JavaScript<br>
      • Python<br>
      • VHDL</p>
      <em style="color#d3bb9c;">Compétences spécifiques :</em><br>
      - Responsive design<br>
      - Structuration et dynamisation de pages web<br>
      - Intégration UX/UI (maquettes Figma)<br>
      - Manipulation du DOM<br><br>
      <em style="color:#d3bb9c;">En cours d’apprentissage :</em><br>
      - Java, Angular, Bases de données, Spring Boot
    `,
    categorie: 'web'
  },
   {titre: `
      <strong style="color:rgb(19, 62, 154);" >Langages scientifiques & systèmes</strong><br>
      C, C++, Python, MATLAB, Visual Basic<br><br>
      
      <strong style="color:rgb(19, 62, 154);">Microcontrôleurs & prototypage</strong><br>
      Arduino, Raspberry Pi 3, STM32, ISIS Proteus<br><br>
      
      <strong style="color:rgb(19, 62, 154);">Automatisme & automatisation industrielle</strong><br>
      TIA Portal (V15, V16)<br><br>
      
      <strong style="color:rgb(19, 62, 154);">CAO/DAO & fabrication assistée</strong><br>
      SolidWorks, CATIA, Mastercam
    `,
    description: `<strong style="color:#d3bb9c;">Programmation & Logiciels techniques </strong><br> `,
    categorie: 'Techniques'
  }
];
/*Langages maîtrisés :
 HTML, CSS, JavaScript, Python, VHDL
Compétences spécifiques :
Responsive design
Structuration et dynamisation de pages web
Intégration UX/UI (maquettes Figma)
Manipulation du DOM
En cours d’apprentissage : Java, Angular, UX/UI Design avancé, Bases de données, Spring Boot*/

/*
  {
    titre: 'Java, Angular, UX/UI Design, DOM',
    description: 'En cours d`apprentissage :',
    categorie: 'web+'
  },
  {
    titre: 'C, C++, Python, MATLAB, Arduino, Visual Basic, TIA Portal V16, SolidWorks, CATIA, Mastercam, ISIS Proteus',
    description: 'Programmation & Logiciels techniques :',
    categorie: 'technique'
  }
];
*/
const liste = document.getElementById("competences-list");
const filtre = document.getElementById("filtre");

function afficherCompetences(categorie) {
  // Vide la liste actuelle
  liste.innerHTML = "";


  const resultats = (categorie === "toutes")
    ? competences
    : competences.filter(comp => comp.categorie === categorie);

  
  resultats.forEach(comp => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${comp.description}</strong><br>${comp.titre}`;
    liste.appendChild(li);
  });
}


afficherCompetences("toutes");


filtre.addEventListener("change", (e) => {
  afficherCompetences(e.target.value);
});
const h5 = document.getElementById("h5");
h5.textContent="Mes compétences :"


  const container2 = document.querySelector(".container2");
  if (container2) {
    const intro1 = document.createElement("h1");
    intro1.classList.add("cursor");
    container2.appendChild(intro1);

    const texte1 = " Qui je suis ?";
    let index1 = 0;

    function ecrireQuiJeSuis() {
      if (index1 < texte1.length) {
        intro1.textContent += texte1.charAt(index1);
        index1++;
        setTimeout(ecrireQuiJeSuis, 100);
      } else {
        intro1.classList.remove("cursor");
      }
    }

    ecrireQuiJeSuis();
  }

  // Décommenter si tu définis showMainContent()
  // if (localStorage.getItem("visitedBefore")) {
  //   showMainContent();
  // }
});
