// Ecouteur d'événement pour le formulaire avec l'ID "PMGC-calcul"
document.getElementById("Calcul-DSAM").addEventListener("submit", function(event) {

    // Empêche le comportement par défaut du formulaire (soumission et rechargement de la page)
    event.preventDefault();
    console.log('Formulaire soumis');

    // Récupère les valeurs des champs du formulaire
    const sexe_value = document.getElementById('sexe').value;
    const age_value = document.getElementById('age').value;
    const taille_value = document.getElementById('taille').value;
    const poids_value = document.getElementById('poids').value;
    const spéci_value = document.getElementById('spéci').value;
    const substance_value = document.getElementById('substance').value;

    // Crée un tableau avec les valeurs des champs pour vérification
    const verif = [sexe_value, age_value, taille_value, poids_value, spéci_value, substance_value]

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
    const spéci = verif[4];
    const substance = verif[5];

    // Affiche les valeurs avant le calcul de l'IMC dans la console 
    console.log('Spécificité de santé:', spéci);
    console.log('Substance:', substance);
    console.log('Sexe:', sexe);
    console.log('Age:', age);
    console.log('Taille :', document.getElementById('taille').value);
    console.log('Poids:', poids);
    const spéci = verif[4];
    const substance = verif[5];

    // Paracétamol
    if (substance === "paracetamol") {
        if (age < 6) {
            alert('Ce médicament vous est contre-indiqué de manière absolue ! Veuillez consulter votre médecin traitant.');
            return;
        } else if (age > 80) {
            alert('Voir la posologie avec votre médecin traitant.');
            return;
        }

        if (poids < 50) {
            alert('Voir la posologie avec votre médecin traitant.');
            return;
        }

        if (sexe === "femme" && spéci === "G") {
            alert('Si enceinte, voir la posologie avec votre médecin traitant.');
            return;
        }

        if (spéci === "H") {
            alert('Ce médicament vous est contre-indiqué de manière absolue ! Veuillez consulter votre médecin traitant.');
            return;
        }

        if (spéci === "I") {
            alert('Ce médicament vous est contre-indiqué de manière absolue ! Veuillez consulter votre médecin traitant.');
            return;
        }

        // Calculateur pour le paracétamol
        let dosage = "";
        if (poids >= 50) {
            dosage = "500 à 1 000mg soit 1 à 2 comprimés par prise. Attention : Ne pas dépasser 4gr soit 8 comprimés par jour !";
        }

        // Affiche le résultat dans la console + alerte
        console.log(`Votre dosage idéal pour le paracétamol est de ${dosage}`);
        alert(`Votre dosage idéal pour le paracétamol est de ${dosage}`);
    }

    // Aspirine
    if (substance === "aspirine") {
        if (age < 6) {
            alert('Voir la posologie avec votre médecin traitant.');
            return;
        } else if (age > 80) {
            alert('La durée du traitement ne doit pas dépasser 3 jours sans avis médical.');
        }

        if (poids < 30) {
            alert('Voir la posologie avec votre médecin traitant.');
            return; }
         else if (poids = 30-40) {
                alert('1 comprimé à 500mg, à renouveler au bout de 6 hr si nécessaire. Ne pas dépasser 4 prises/jour !');
                return;
            }
        else if (poids = 41-50) {
                alert('1 comprimé à 500mg, à renouveler au bout de 4 hr si nécessaire. Ne pas dépasser 4 prises/jour !');
                return;
            }
        else if (poids = 30-50) {
            let dosage = (poids * 60);
            alerte ('Attention ! Sans avis médical, la durée de traitement ne doit pas dépasser 3 jours en cas de fièvre et 5 jours en cas de douleurs.');
            }        

        if (sexe === "femme" && spéci === "G") {
            alert('Si enceinte depuis plus de 6 mois, le médicament vous est formellement interdit ! ');
            return;
            } 
        else if (sexe === "femme" && spéci === "A") {    
            alert('Si vous allaitez, le médicament vous est formellement interdit ! ');
            return;
        }

        if (spéci === "H") {
            alert('Ce médicament vous est contre-indiqué de manière absolue ! Veuillez consulter votre médecin traitant.');
            return;
        }

        if (spéci === "I") {
            alert('Ce médicament vous est contre-indiqué de manière absolue ! Veuillez consulter votre médecin traitant.');
            return;
        }

        // Affiche le résultat dans la console et dans une alerte
        console.log(`Votre dosage idéal pour de l'aspirine est de ${dosage}`);
        alert(`Votre dosage idéal pour de l'aspirine est de ${dosage}`);
    }
});