/**
*   Style       : CorvanisDashboard 
*   Fichier     : tables.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const searchInputClass = ".search-input";
const listItemClass = ".list-group-item";
const form = document.querySelector(`form input${searchInputClass}`);

form.addEventListener('keyup', filterList(listItemClass));

/**
*   Cette fonction permet d'effectuer une recherche.
*
*   @param {string} litemClass
*
*   @return {void}
**/
function filterList(litemClass)
{
    const inputValue = document.querySelector(searchInputClass);
    const filter = inputValue.value.toLowerCase();
    const listItems = document.querySelectorAll(litemClass);

    listItems.forEach((item) => 
    {
        let text = item.textContent;

        if (text.toLowerCase().includes(filter))
        {
            item.style.display = "";
        }
    });
}

/**
*   Cette fonction permet de trier une liste d'éléments.
*
*   @return {void}
**/
function sortList()
{

}