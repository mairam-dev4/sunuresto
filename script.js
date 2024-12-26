// Mettre à jour les options de boisson ou de dessert
function updateOptions() {
    let choix = document.getElementById("choixOffre").value;
    let optionsListe = document.getElementById("optionsListe");
    optionsListe.innerHTML = ''; // Effacer les options précédentes
  
    if (choix === "boisson") {
      optionsListe.innerHTML = `
        <label for="boisson">Choisir une boisson :</label>
        <select class="form-select" id="boisson">
          <option value="jus bissap">Jus de Bissap</option>
          <option value="jus bouye">Jus de Bouye</option>
        </select>
      `;
    } else if (choix === "dessert") {
      optionsListe.innerHTML = `
        <label for="dessert">Choisir un dessert :</label>
        <select class="form-select" id="dessert">
          <option value="thiakry">Thiakry</option>
          <option value="tiramisu">Tiramisu</option>
        </select>
      `;
    }
  }
  
  // Valider l'offre spéciale et revenir à la section Offre Spéciale
  function validateOffer() {
    let choix = document.getElementById("choixOffre").value;
    let selectedOption;
    if (choix === "boisson") {
      selectedOption = document.getElementById("boisson").value;
    } else if (choix === "dessert") {
      selectedOption = document.getElementById("dessert").value;
    }
    alert(`Offre validée ! Vous avez choisi ${selectedOption}.`);
    window.location.hash = "#offre-speciale"; // Revenir à la section Offre Spéciale
  }
  
  // Panier
  let panier = [];
  
  function ajouterAuPanier() {
    const choix = document.getElementById('choixOffre').value;
    let selection = '';
    if (choix === 'boisson') {
      selection = document.querySelector('#optionsListe #boisson').value;
    } else if (choix === 'dessert') {
      selection = document.querySelector('#optionsListe #dessert').value;
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
  
  
// SECTION COMMANDER
document.getElementById("validerCommandeBtn").addEventListener("click", function() {
    // Récupérer les valeurs des inputs de sélection
    const plat = document.getElementById("plat").value;
    const boisson = document.getElementById("boisson").value;
    const dessert = document.getElementById("dessert").value;
    
    // Initialiser le message de confirmation
    let confirmationMessage = "Vous avez commandé :\n";
    
    // Vérifier et ajouter les éléments sélectionnés au message de confirmation
    if (plat !== "Choisissez un plat") {
      confirmationMessage += `Plat: ${plat}\n`;
    }
    if (boisson !== "Choisissez une boisson") {
      confirmationMessage += `Boisson: ${boisson}\n`;
    }
    if (dessert !== "Choisissez un dessert") {
      confirmationMessage += `Dessert: ${dessert}\n`;
    }
    
    // Si rien n'est sélectionné, afficher un message différent
    if (plat === "Choisissez un plat" && boisson === "Choisissez une boisson" && dessert === "Choisissez un dessert") {
      confirmationMessage = "Vous n'avez rien sélectionné.";
    }
    
    // Afficher le message de confirmation
    alert(confirmationMessage);
    
    // Fermer le modal
    const modal = new bootstrap.Modal(document.getElementById('commandeModal'));
    modal.hide();
});
