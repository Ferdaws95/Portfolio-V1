// Titre principal
document.querySelector("h5").textContent = "Bienvenue dans mon espace projets !";

// Description
const h4 = document.getElementById("h4");
h4.textContent = "Vous trouverez ici une sélection de réalisations concrètes que j’ai développées au fil de mon apprentissage et de mes expériences. Chaque projet illustre mes compétences techniques en JavaScript, Angular, et Java, ainsi que ma capacité à concevoir des interfaces modernes, dynamiques et adaptées aux besoins des utilisateurs. N'hésitez pas à explorer les différentes catégories pour découvrir mes travaux.";

// Liste des projets
const projets = [
  { img: '2.png', titre: 'Projet 1' ,link: ""},
  { img: '1.png', titre: 'Projet 2' ,link: ""},
  { img: '3.png', titre: 'Projet 3' ,link: ""},
  { img: '4.png', titre: 'Projet 4' ,link: ""},
  { img: '5.png', titre: 'Projet 5' ,link: ""},
  { img: '6.png', titre: 'Projet 6',link: "" }
];

// Référence au conteneur du carrousel
const container = document.getElementById('projetsContainer');
container.classList.add('carousel');

// Génération dynamique des projets
// Dupliquer les projets pour créer un effet d'infini
// Génération dynamique des projets dans le premier carrousel
projets.forEach(projet => {
  const div = document.createElement('div');
  div.className = 'projet';

  const img = document.createElement('img');
  img.src = projet.img;
  img.alt = projet.titre;

  const h6 = document.createElement('h6');
  h6.textContent = projet.titre;

  // Si un lien existe, encapsuler le contenu dans un <a>
  if (projet.link) {
    const a = document.createElement('a');
    a.href = projet.link;
    a.target = '_blank';
    a.appendChild(img);
    a.appendChild(h6);
    div.appendChild(a);
  } else {
    div.appendChild(img);
    div.appendChild(h6);
  }

  container.appendChild(div.cloneNode(true)); // duplication
});

// Deuxième carrousel (sans duplication, mais même logique de lien)
const container1 = document.getElementById('projetsContainer2');

projets.forEach(projet1 => {
  const div = document.createElement('div');
  div.className = 'projet1';

  const img = document.createElement('img');
  img.src = projet1.img;
  img.alt = projet1.titre;

  const h6 = document.createElement('h6');
  h6.textContent = projet1.titre;

  if (projet1.link) {
    const a = document.createElement('a');
    a.href = projet1.link;
    a.target = '_blank';
    a.appendChild(img);
    a.appendChild(h6);
    div.appendChild(a);
  } else {
    div.appendChild(img);
    div.appendChild(h6);
  }

  container1.appendChild(div);
});
