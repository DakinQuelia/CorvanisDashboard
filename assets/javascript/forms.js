/**
*   Style       : CorvanisDashboard 
*   Fichier     : forms.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const allInputs = document.querySelectorAll('form input');

// On gère les infobulles d'aide des champs du formulaire
if (allInputs.length !== 0 || allInputs !== undefined || allInputs !== null)
{
    allInputs.forEach((item) =>
    {
        const parent = item.parentElement;
        const helpContainer = parent.querySelector('form .help-container');

        if (helpContainer === null || helpContainer === undefined)
        {
            return false;
        }

        /**
        *   On affiche l'information d'aide.
        **/
        item.addEventListener("focus", () =>
        {
            helpContainer.style.display = "block";
        });

        /**
        *   On masque l'information d'aide. 
        **/
        item.addEventListener("blur", () =>
        {
            helpContainer.style.display = "none";
        });
    });
}