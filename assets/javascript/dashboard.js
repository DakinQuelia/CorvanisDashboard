/**
*   Style       : CorvanisDashboard 
*   Fichier     : app.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const allSideMenu = document.querySelectorAll('.sidebar .side-menu.top li a');

allSideMenu.forEach((item) => 
{
    const li = item.parentElement;

    item.addEventListener('click', () =>
    {
        allSideMenu.forEach((i) => 
        {
            i.parentElement.classList.remove('active');
        });

        li.classList.add('active');
    });
});

// Afficher / masquer la barre latérale
const menuBar = document.querySelector('.content nav i.bx.bx-menu');
const sidebar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => { sidebar.classList.toggle('hide'); });

// Afficher / Masquer le formulaire de recherche
const searchButton = document.querySelector('.content nav form .form-input button');
const searchButtonIcon = document.querySelector('.content nav form .form-input button i.bx');
const searchForm = document.querySelector('.content nav form');

searchButton.addEventListener('click', (e) => 
{
    if (window.innerWidth < 576)
    {
        e.preventDefault();

        searchForm.classList.toggle('show');

        if (searchForm.classList.contains('show'))
        {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        }
        else
        {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
});

// Afficher le contenu des onglets horizontaux
const allTabs = document.querySelectorAll('.tab-menu li');

if (allTabs !== null)
{
    const allContents = document.querySelectorAll('.tab-contents .tab-content');
    const line = document.querySelector('.tab-menu .line');

    let tabWidth = allTabs[0].offsetWidth;
    let tabLeft = allTabs[0].offsetLeft;

    line.style.width = tabWidth + 'px';
    line.style.left = tabLeft + 'px';

    allTabs.forEach((item) => 
    {
        if (!item.classList.contains('dropdown-toggle'))
        {
            item.addEventListener('click', function() 
            {
                allTabs.forEach((i) => 
                {
                    i.classList.remove('active');
                });
    
                if (this.parentElement.classList.contains('dropdown'))
                {
                    tabWidth = this.parentElement.parentElement.offsetWidth;
                    tabLeft = this.parentElement.parentElement.offsetLeft;
    
                    this.parentElement.parentElement.classList.add('active');
                }
                else
                {
                    tabWidth = this.offsetWidth;
                    tabLeft = this.offsetLeft;
    
                    this.classList.add('active');
                }
    
                line.style.width = tabWidth + 'px';
                line.style.left = tabLeft + 'px';
    
                allContents.forEach((content) => 
                {
                    if (this.dataset.target === content.id)
                    {
                        content.classList.add('active');
                    }
                    else
                    {
                        content.classList.remove('active');
                    }
                });
            });
        }
    });
}

// Afficher le contenu des onglets verticaux
const allTabsVR = document.querySelectorAll('.tab-menu-vr .indicator li');
const allContentsVR = document.querySelectorAll('.tab-menu-vr .tab-content li');

if (allTabsVR !== null)
{
    allTabsVR.forEach((item) => 
    {
        item.addEventListener('click', function()
        {
            const content = document.querySelector(`#${this.dataset.target}`);
    
            console.log(content);
    
            allTabsVR.forEach((i) => 
            {
                i.classList.remove('active');
            });
    
            allContentsVR.forEach((i) => 
            {
                i.classList.remove('active');
            });
    
            content.classList.add('active');
            this.classList.add('active');
        });
    });
}

// Reponsive
if (window.innerWidth < 768)
{
    sidebar.classList.add('hide');
}
else if (window.innerWidth > 576)
{
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

// Au redimensionnement
window.addEventListener('resize', function() 
{
    if (this.innerWidth > 576)
    {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
});

// Menu contextuel
const contextMenu = document.querySelector('.context-menu');

window.addEventListener('contextmenu', function(e) 
{
    e.preventDefault();

    console.log(`Position :: Y: ${e.offsetY}px || X : ${e.offsetX}px`);

    if (contextMenu.classList.contains('show'))
    {
        contextMenu.classList.remove('show');
    }
    else
    {
        contextMenu.style.top = `${e.offsetY}px`;
        contextMenu.style.left = `${e.offsetX}px`;
        contextMenu.classList.add('show');
    }
});