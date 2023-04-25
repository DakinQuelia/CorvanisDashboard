/**
*   Style       : CorvanisDashboard 
*   Fichier     : forms.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const allInputs = document.querySelectorAll('.form-group input');

if (allInputs.length !== 0 || allInputs !== undefined || allInputs !== null)
{
    allInputs.forEach((item) =>
    {
        const parent = item.parentElement;
        const helpContainer = parent.querySelector('.help-container');

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