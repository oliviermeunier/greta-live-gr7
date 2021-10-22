//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// IMPORT DE MODULE /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// FONCTIONS ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
function onClickAddButton()
{
    // console.log('Click sur le bouton "Nouveau contact"');

    // Sélection du formulaire qui possède l'id 'contact-form'
    const form = document.getElementById('contact-form');

    // Faire apparaître le formulaire => lui enlever la classe 'hidden' via l'API classList
    form.classList.remove('hidden');

    // Modifier la valeur de l'attribut data "mode" sur le bouton "Enregistrer" du formulaire 
    document.getElementById('save-contact').dataset.mode = 'add';

    // Si un contact est sélectionné, on le désélectionne
    const selectedContact = document.querySelector('#contact-list .selected');
    if (selectedContact != null) {
        selectedContact.classList.remove('selected');
    }

    // On masque le bloc de détails
    document.getElementById('contact-details').classList.add('hidden');

    // On vide le formulaire si jamais on a modifié un contact avant
    form.reset();
}

function onClickSaveButton()
{
    // console.log('Click sur le bouton "Enregistrer"');
    let index = null;

    /**
     * Pour récupérer les données du formulaire, plusieurs solutions :
     *   - (version 1) récupérer la "valeur" des champs individuellement les uns après les autres
     *   - (version 2) utiliser la classe FormData 
     */

    // Récupérer les données du formulaire et les ranger dans un objet (VERSION 1)
    // const contact = {
    //     firstname: document.getElementById('firstname').value, 
    //     lastname: document.getElementById('lastname').value, 
    //     email: document.getElementById('email').value, 
    //     phone: document.getElementById('phone').value 
    // }

    const contact = getContactFromForm();

    // On récupère le tableau contenant la liste des contacts 
    const addressBook = loadAddressBook();

    // // On commence par aller chercher dans le local storage le contenu de la clé 'addressBook'
    // const jsonDataFromStorage = localStorage.getItem('addressBook');

    // // On récupère du JSON on doit le désérialiser
    // let addressBook = JSON.parse(jsonDataFromStorage);

    // // Si on récupère la valeur null, c'est que le carnet d'adresses n'existe pas encore dans le local storage...
    // if (addressBook === null) {

    //     // ...on crée un tableau vide
    //     addressBook = [];
    // }

    const selectedContact = document.getElementById('save-contact');
    const mode = selectedContact.dataset.mode;

    // Si on est en mode "Ajout"
    if(mode == 'add') {

        // On ajoute le nouveau contact dans le tableau de contacts
        addressBook.push(contact);
    } 
    else {

        // On va récupérer l'index du contact à modifier à partir du contact sélectionné
        const selectedContact = document.querySelector('#contact-list .selected');
        index = selectedContact.dataset.index;

        // On remplace le contact existant dans le tableau de contact
        addressBook[index] = contact;

        showContactDetails(contact);
    }

    // Tri du carnet d'adresses par ordre alphabétique avant l'enregistrement
    sortAddessBook(addressBook)

    // On commence par transformer le tableau de contact au format JSON
    const jsonData = JSON.stringify(addressBook);

    // Enregistrer les données sérialisées dans le Local Storage
    localStorage.setItem('addressBook', jsonData);

    // Il ne reste plus qu'à masquer le formulaire
    document.getElementById('contact-form').classList.add('hidden');

    // On il faudra mettre à jour la liste de contacts pour que le nouveau contact apparaisse
    refreshContactList(index);
}

/**
 * Charge le carnet d'adresses depuis le local storage
 */
function loadAddressBook()
{
    // On charge le carnet depuis le local storage
    let addressBook = loadDataFromLocalStorage('addressBook');

    // Si on ne récupère rien...
    if (addressBook === null) {
        addressBook = [];
    }

    // On retourne le carnet d'adresses pour le récupérer à l'extérieur de la fonction
    return addressBook;
}

/**
 * Gestionnaire d'événement au click sur un contact de la liste
 */
function onClickContact(event)
{
    // console.log('Click sur un contact');

    /**
     * On récupère le lien cliqué. Pour ça 2 solutions :
     *     - on prend en paramètre de la fonction l'objet event puis on fait event.currentTarget
     *     - on utiliser le mot-clé this
     */
    const clickedContact = event.currentTarget;

    // On récupère la valeur de l'attribut data "index" du lien cliqué
    const index = clickedContact.dataset.index;

    // On charge le carnet d'adresses
    const addressBook = loadAddressBook();

    // On récupère le contact
    const contact = addressBook[index];

    showContactDetails(contact);

    // On supprime la classe 'selected' de l'élément qui la possède le cas échéant
    const selectedContact = document.querySelector('.selected');

    if (selectedContact != null) {
        selectedContact.classList.remove('selected');
    }

    // On ajoute la classe 'selected' sur le lien cliqué pour le "sélectionner"
    clickedContact.classList.add('selected');

    // On masque le formulaire
    document.getElementById('contact-form').classList.add('hidden');
}

/**
 * Met à jour l'affichage de la liste de contacts
 */
function refreshContactList(selectedIndex = null)
{
    // On charge le carnet d'adresse
    const addressBook = loadAddressBook();

    // On sélectionne la balise <div> avec l'id contact-list
    const contactListContainer = document.getElementById('contact-list');

    // On construit un élément <ul>
    const ulElt = document.createElement('ul');

    // On parcours le carnet d'adresses et pour chaque contact...
    for (let index = 0; index < addressBook.length; index++) {

        // On stocke le contact courant dans une variable contact
        const contact = addressBook[index];

        // Filtre du contact en fonction du champ de recherche
        const searchQuery = document.getElementById('search').value.trim().toLowerCase();

        /**
         * Rem. : 
         *    - trim() supprime les espaces autour du texte recherché
         *    - toLowerCase() va mettre le texte en minuscules pour que la recherche soit insensible à la casse
         */

        // S'il y a quelque chose dans le champ de recherche...
        if (searchQuery.length > 0) {

            // Si le contact courant ne match pas avec la recherche...
            if (!contact.lastname.toLowerCase().includes(searchQuery) && !contact.firstname.toLowerCase().includes(searchQuery)) {
                
                // On saute ce contact, on passe directement au suivant !
                continue;
            }
        }

        // On crée un élément <li>
        const liElt = document.createElement('li');

        // On crée un élément <a>
        const aElt = document.createElement('a');

        // On modifie l'attribut href du lien pour créer une ancre vers le bloc de détails
        aElt.href = '#contact-details';
        // aElt.setAttribue('href', '#contact-details');

        // On écrit dans le <a> le nom et le prénom du contact courant
        aElt.textContent = contact.lastname + ' ' + contact.firstname;

        // On stocke dans un attribut-data "index" l'indice du contact
        aElt.dataset.index = index;

        // Sélection du contact le cas échéant
        if (selectedIndex == index) {
            const selectedContact = document.querySelector('.selected');
            if (selectedContact != null) {
                selectedContact.classList.remove('selected');
            }

            // On ajoute la classe 'selected' sur le lien cliqué pour le "sélectionner"
            aElt.classList.add('selected');
        }

        // On installe un gestionnaire d'événement au click sur le lien nouvellement créé
        aElt.addEventListener('click', onClickContact);

        // On insère la <a> dans le <li>
        liElt.appendChild(aElt);

        // On insère le <li> dans le <ul>
        ulElt.appendChild(liElt);
    }

    // On supprime l'ancien contenu de la <div> pour ne pas avoir plusieurs fois la liste de contacts
    contactListContainer.textContent = '';

    // On insère l'élément <ul> dans la <div>
    contactListContainer.appendChild(ulElt);
}

function onClickEditButton()
{
    // console.log('click sur le bouton "Modifier"');

    // récupérer le carnet d'adresses (on a fait une fonction pour ça !)
    const addressBook = loadAddressBook();

    // sélectionner l'élément de la liste qui possède la classe selected 
    const selectedContact = document.querySelector('#contact-list .selected');

    // récupérer à partir de cet élément la valeur de son attribut-data index
    const index = selectedContact.dataset.index;
    
    // à partir de cet index et du carnet d'adresses, récupérer le contact
    const contact = addressBook[index];

    // remplir le formulaire avec les informations du contact
    fillForm(contact);

    // On fait apparaître le formulaire
    document.getElementById('contact-form').classList.remove('hidden');

    // Modifier la valeur de l'attribut data "mode" sur le bouton "Enregistrer" du formulaire 
    document.getElementById('save-contact').dataset.mode = 'edit';
}

function onClickDeleteButton()
{
    // On récupère le carnet d'adresses
    const addressBook = loadAddressBook();

    // On récupère l'indice du contact sélectionné actuellement (celui qu'on souhaite supprimer)
    const index = document.querySelector('#contact-list .selected').dataset.index;

    // On supprime l'élément du tableau de contact concerné
    addressBook.splice(index, 1);

    // On enregistre le carnet d'adresses
    // On commence par transformer le tableau de contact au format JSON
    const jsonData = JSON.stringify(addressBook);

    // Enregistrer les données sérialisées dans le Local Storage
    localStorage.setItem('addressBook', jsonData);

    // On masque le bloc de détails
    document.getElementById('contact-details').classList.add('hidden');

    // Et on masque le formulaire
    document.getElementById('contact-form').classList.add('hidden');

    // On met à jour l'affichage
    refreshContactList();
}

/**
 * Tir le carnet d'adresses par ordre alphabétique sur le nom puis sur le prénom
 */
function sortAddessBook(addressBook)
{
    addressBook.sort(function(contactA, contactB){

        // On compare les noms de famille des 2 contacts
        if(contactA.lastname.toLowerCase() > contactB.lastname.toLowerCase())
            return 1;

        if(contactA.lastname.toLowerCase() < contactB.lastname.toLowerCase())
            return -1;

        // Ici le nom de famille est identique pour les 2 contacts, on compare donc le prénom
        if(contactA.firstname.toLowerCase() > contactB.firstname.toLowerCase())
            return 1;

        if(contactA.firstname.toLowerCase() < contactB.firstname.toLowerCase())
            return -1;

        // Ici ce sont des homonymes parfaits (même nom et même prénom)
        return 0;
    });
}

function onInputSearch()
{
    /**
     * Ce gestionnaire d'événement est appelé lorsqu'on écrit quelque chose dans le champ de recherche
     */

    // Tout ce qu'on va faire c'est actualiser la liste des contacts
    refreshContactList();
}

/**
 * Enregistre le carnet d'adresses dans le Local Storge 
 */
function saveAddressBook(addressBook)
{
    // On appelle la fonction utilitaire saveDataToLocalStorage() avec les paramètres spécifiques au carnte d'adresses
    saveDataToLocalStorage('addressBook', addressBook);
}

/**
 * Enregistre des données dans le Local Storage après les avoir transformées en JSON
 */
function saveDataToLocalStorage(key, data)
{
    // Transformation des données en JSON
    const jsonData = JSON.stringify(data);

    // Enregistrement des données
    localStorage.setItem(key, jsonData);
}

/**
 * Charge des données JSON depuis le Local storage et les désérialise
 */
function loadDataFromLocalStorage(key)
{
    // On récupère les données du Local Storage
    const jsonData = localStorage.getItem('addressBook');

    // On désérialise le JSON
    return JSON.parse(jsonData);
}

/**
 * Affiche les informations d'un contact dans le bloc de détails
 */
function showContactDetails(contact)
{    
    // On affiche les informations du contact dans le bloc de détails
    document.querySelector('#contact-details h2').textContent = contact.lastname + ' ' + contact.firstname;
    document.getElementById('contact-email').textContent = contact.email;
    document.getElementById('contact-phone').textContent = contact.phone;

    // On fait apparaître le bloc de détails
    document.getElementById('contact-details').classList.remove('hidden');
}

/**
 * Masque le bloc de détails
 */
function hideContactDetails()
{
    document.getElementById('contact-details').classList.add('hidden');
}

/**
 * Remplit les champs du formulaire avec les données d'un contact
 */
function fillForm(contact)
{
    document.getElementById('firstname').value = contact.firstname;
    document.getElementById('lastname').value = contact.lastname;
    document.getElementById('email').value = contact.email;
    document.getElementById('phone').value = contact.phone;
}

/**
 * Récupère un objet contact depuis les champs du formulaire
 */
function getContactFromForm()
{
    // Récupérer les données du formulaire et les ranger dans un objet (VERSION 2)
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    const contact = {
        firstname: formData.get('firstname'), 
        lastname: formData.get('lastname'), 
        email: formData.get('email'), 
        phone: formData.get('phone') 
    }

    return contact;
}

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// CODE PRINCIPAL ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// Installation d'un gestionnaire d'événement au click sur le bouton "Nouveau contact"
const addButton = document.getElementById('add-contact');
// const addButton = document.querySelector('#add-contact');

addButton.addEventListener('click', onClickAddButton);

/**
 * Si je n'ai pas besoin de mon bouton "Nouveau contact" ailleurs dans mon code 
 * je ne suis pas obligé de créer une variable :
 * 
 *  document.getElementById('add-contact').addEventListener('click', onClickAddButton);
 */


// Installation d'un gestionnaire d'événement au click sur le bouton "Enregistrer" du formulaire
document.getElementById('save-contact').addEventListener('click', onClickSaveButton);

// Installation d'un gestionnaire d'événement au click sur le bouton "Modifier"
document.getElementById('contact-edit').addEventListener('click', onClickEditButton);

// Installation d'un gestionnaire d'événement au click sur le bouton "Supprimer"
document.getElementById('contact-delete').addEventListener('click', onClickDeleteButton);

// Installation d'un gestionnaire d'événement sur le champ de recherche
document.getElementById('search').addEventListener('input', onInputSearch);

// Affichage de la liste de contacts
refreshContactList();










