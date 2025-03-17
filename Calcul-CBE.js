// Ecouteur d'événement pour le formulaire 
document.getElementById("Calcul-CBE").addEventListener("submit", function(event) {

    // Empêche le comportement par défaut du formulaire (soumission et rechargement de la page)
    event.preventDefault();
    console.log('Formulaire soumis');

    // Récupère les valeurs des champs du formulaire
    const sexe_value = document.getElementById('sexe').value;
    const age_value = document.getElementById('age').value;
    const taille_value = document.getElementById('taille').value;
    const poids_value = document.getElementById('poids').value;
    const niveauactivite_value = document.getElementById('niveauactivite').value;

    // Crée un tableau avec les valeurs des champs pour vérification
    const verif = [sexe_value, age_value, taille_value, poids_value, niveauactivite_value];

    // Vérifie si un des champs est vide et affiche une alerte si c'est le cas
    if (verif.some((x) => x === "")) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    // Assigne les valeurs des champs à des variables et les convertit en nombres
    const sexe = verif[0];
    const age = parseInt(verif[1]);
    const taille = parseFloat(verif[2].replace(",","."));
    const poids = parseFloat(verif[3]);
    const niveauactivite = verif[0];

    // Affiche les valeurs avant le calcul dans la console (visible sur chrome avec F12)
    console.log('Sexe:', sexe);
    console.log('Age:', age);
    console.log('Taille :', document.getElementById('taille').value);
    console.log('Poids:', poids);
    console.log('niveauactivite:', niveauactivite);

    // Détermine la valeur du sexe (pour homme, pour femme)
    const sexeValue = (sexe === 'homme' ) ? 66.5 : 655 ;
    const sexeValue1 = (sexe === 'homme' ) ? 13.75 : 9.56 ;
    const sexeValue2 = (sexe === 'homme' ) ? 5.0 : 1.85 ;
    const sexeValue3 = (sexe === 'homme' ) ? 6.75 : 4.7 ;

    // Calcule le pourcentage de masse grasse corporelle en utilisant la formule de Deurenberg
    let BEJ  = sexeValue + (sexeValue1 * poids) + (sexeValue2 * taille) - (sexeValue3 * age);

    // Affiche le pourcentage de masse grasse corporelle dans la console
    console.log('BEJ', BEJ);

   let resultat ="";
   if (niveauactivite === 'Sédentaire') {
        BEJ = BEJ * 1.2;
    } else if (niveauactivite === 'Peu actif') {
        BEJ = BEJ * 1.375;
    } else if (niveauactivite === 'Actif') {
        BEJ = BEJ * 1.55;
    } else if (niveauactivite === 'Très actif') {
        BEJ = BEJ * 1.725;
    } else if (niveauactivite === 'Extrêmement actif') {
        BEJ = BEJ * 1.9;
    }
    // Affiche le pourcentage de masse grasse corporelle dans la console + alerte
    console.log(`Vos besoins énergétiques journalier sont de ${BEJ}.`);
    alert(`Vos besoins énergétiques journalier sont de ${BEJ.toFixed(2)} Kcal.`);
});