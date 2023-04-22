/**
*   Style       : CorvanisDashboard 
*   Fichier     : tags.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const input = document.querySelector('.wrapper .tags .input-tag');
const tagWrapper = document.querySelector('.wrapper .tags');
let listTag = [];

input.addEventListener('input', function()
{
    if (this.value.includes(','))
    {
        const str = this.value.toLowerCase().replace(/ +/g, ' ');

        str.forEach((item) => 
        { 
            const text = item.trim();

            if (!listTag.includes(text) && text !== "" && text !== " ")
            {
                listTag.push(text);
                addTag();
            }
        });

        this.value = "";
    }
});

/**
*   Cette fonction permet d'ajouter un tag à la liste.
**/
function addTag()
{
    listTag.forEach((item) => 
    { 
        const li = document.createElemen('li');

        li.innerHTML = `
            <span class="text">${item}</span>
            <i class="bx bx-x close-button"></i>
        `;

        tagWrapper.insertBefore(li, input);
    });
}