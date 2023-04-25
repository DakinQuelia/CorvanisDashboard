/**
*   Style       : CorvanisDashboard 
*   Fichier     : forms.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const allInputs = document.querySelectorAll('input');
const helpContainer = document.querySelector('.help-container');

allInputs.forEach((item) => function() 
{
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
