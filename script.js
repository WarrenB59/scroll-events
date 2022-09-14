let playOnce = true;

// Créer un événement au scroll
window.addEventListener("scroll", () => {
  // Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut
  if (window.scrollY > 50) {
    navbar.style.height = "30px";
  } else {
    navbar.style.height = "90px";
  }

  // Faire apparaître l'image de la partie improvise
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  console.log(scrollValue);
  if (scrollValue >= 0.5) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }
  // Faire apparaître la popup quand on est en bas du site
  if (scrollValue >= 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

// Bonus : quand on clique sur la popup elle disparaît pour toujours
closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
});
