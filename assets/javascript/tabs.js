/**
*   Style       : CorvanisDashboard 
*   Fichier     : tabs.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
// Afficher le contenu des onglets horizontaux
const allTabs = document.querySelectorAll('.tab-menu li');

if (allTabs !== null || allTabs !== undefined)
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

if (allTabsVR !== null ||allTabsVR !== undefined)
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