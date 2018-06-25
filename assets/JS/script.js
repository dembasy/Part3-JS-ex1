function on(){
  // Variable image
  var image = document.getElementById('image1');
  //Assignation de la couleur et la taille de la bordure
  image.style.borderColor = "red";
  image.border = "3px";
}
// Fonction qui sert a retirer la bordure rouge
function off() {
//Suppression de la bordure en enlevant la souris
  document.getElementById('image1').border = 0;
}
