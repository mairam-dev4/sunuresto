// Mettre à jour les options de boisson ou de dessert
function updateOptions() {
    let choix = document.getElementById("choixOffre").value;
    let optionsListe = document.getElementById("optionsListe");
    optionsListe.innerHTML = ''; // Clear previous options

    if (choix === "boisson") {
        optionsListe.innerHTML = `
            <label for="boisson">Choisir une boisson :</label>
            <select class="form-select" id="boisson">
                <option value="jus">Jus de Bissap</option>
                <option value="attaya">Attaya</option>
            </select>
        `;
    } else if (choix === "dessert") {
        optionsListe.innerHTML = `
            <label for="dessert">Choisir un dessert :</label>
            <select class="form-select" id="dessert">
                <option value="thiakry">Thiakry</option>
                <option value="caldou">Caldou</option>
            </select>
        `;
    }
}

// Valider l'offre spéciale et revenir à la section Offre Spéciale
function validateOffer() {
    let choix = document.getElementById("choixOffre").value;
    let selectedOption = (choix === "boisson") ? document.getElementById("boisson").value : document.getElementById("dessert").value;
    alert(`Offre validée ! Vous avez choisi ${selectedOption}.`);
    window.location.hash = "#offreSpeciale"; // Revenir à la section Offre Spéciale
}



        function displayOptions(choice) {
            const boissonOptions = document.getElementById('boisson-options');
            const dessertOptions = document.getElementById('dessert-options');

            if (choice === 'boisson') {
                boissonOptions.style.display = 'block';
                dessertOptions.style.display = 'none';
            } else if (choice === 'dessert') {
                boissonOptions.style.display = 'none';
                dessertOptions.style.display = 'block';
            } else {
                boissonOptions.style.display = 'none';
                dessertOptions.style.display = 'none';
            }
        }



let panier = [];

function ajouterAuPanier() {
    const choix = document.getElementById('choixOffre').value;
    let selection = '';

    if (choix === 'boisson') {
        selection = document.querySelector('#boisson-options select').value;
    } else if (choix === 'dessert') {
        selection = document.querySelector('#dessert-options select').value;
    }

    if (selection) {
        panier.push(selection);
        afficherPanier();
    }
}

function afficherPanier() {
    const panierList = document.getElementById('panier-list');
    panierList.innerHTML = '';
    panier.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        panierList.appendChild(li);
    });
}

function finaliserPanier() {
    alert('Offre spéciale validée! Votre commande a été enregistrée.');
    panier = [];
    afficherPanier();
}