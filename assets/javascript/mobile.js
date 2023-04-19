/**
*   Style       : CorvanisDashboard 
*   Fichier     : mobile.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
/**
*   Gestion des sous-menus
**/
const dropdownToggle = document.querySelector('.sidebar .nav-menu li a.dropdown-toggle');
const dropdown = document.querySelector('.sidebar .nav-menu li .dropdown');

dropdownToggle.addEventListener('click', function() 
{
    dropdown.classList.toggle('active');
});

/**
*   Gestion de la barre de navigation
**/
