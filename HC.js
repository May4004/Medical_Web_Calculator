// Ecouteur d'événement pour le formulaire 
document.getElementById("Calcul-HC").addEventListener("submit", function(event) {

    // Empêche le comportement par défaut du formulaire (soumission et rechargement de la page)
    event.preventDefault();
    console.log('Formulaire soumis');

    // Récupère les valeurs des champs du formulaire
    const zone1 = document.getElementById('poids').value;

    // Vérifie si un des champs est vide et affiche une alerte si c'est le cas
    if (zone1 === "") {
        alert('Veuillez remplir le formulaire.');
        return;
    }
    // Assigne les valeurs des champs à des variables et les convertit en nombres
    const poids = parseFloat(zone1.replace(",","."));

     // Vérifie si la conversion en nombre a réussi
     if (isNaN(poids)) {
        alert('Veuillez entrer un poids valide.');
        return;
    }
    // Affiche les valeurs avant le calcul dans la console (visible sur chrome avec F12)
    console.log('Poids:', poids);

    // Calcul
    let HC  = (30 * poids)*Math.pow(10, -3);

    // Affiche le résultat dans la console
    console.log('HC', HC);

   let resultat ="";

    // Affiche le pourcentage de masse grasse corporelle dans la console + alerte
    console.log(`Votre besoin en eau journalier est de ${HC}.`);
    alert(`Votre besoin en eau journalier est de ${HC.toFixed(2)} L.`);
});