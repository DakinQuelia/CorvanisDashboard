/**
*   Style       : CorvanisDashboard 
*   Fichier     : tags.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const input = document.querySelector('.wrapper .tags .input-tag');
const tagWrapper = document.querySelector('.wrapper .tags');
const removeAll = document.querySelector('.bottom .remove-all');
const totalTags = document.querySelector('.tags-wrap .bottom .total-tags');
let listTag = [];

/**
*   On ajoute le tag à la liste 
**/
input.addEventListener('input', function()
{
    if (this.value.includes(','))
    {
        const str = this.value.toLowerCase().replace(/ +/g, ' ').split(',');

        str.forEach((item) => 
        { 
            const text = item.trim();

            if (!listTag.includes(text) && text !== "" && text !== " ")
            {
                listTag.push(text);
                addTag();
            }
        });

        getTagsCount();

        this.value = "";
    }
});

/**
*   
**/
input.addEventListener('keydown', function(e)
{
    if (e.key === 'Backspace')
    {
        if (this.value === "")
        {
            const li = tagWrapper.querySelectorAll('li');

            li[li.length - 1].remove();
            this.value = listTag[listTag.length - 1] + " ";
            listTag.pop();
            
            getTagsCount();
        }
    }
});

/**
*   Cette fonction permet d'ajouter un tag à la liste.
*
*   @return {void}
**/
function addTag()
{
    tagWrapper.querySelectorAll('li').forEach(li => li.remove());

    listTag.forEach((item) => 
    { 
        const li = document.createElement('li');

        li.innerHTML = `
            <span class="text">${item}</span>
            <i class="bx bx-x close-button"></i>
        `;

        tagWrapper.insertBefore(li, input);
    });
}

/**
*   Cette fonction retourne la longueur du tableau des tags.
*
*   @return {void}
**/
function getTagsCount()
{
    totalTags.textContent = listTag.length;
}

/**
*   On supprime le tag
**/
window.addEventListener('click', function(e) 
{
    if (e.target.matches('.bx.bx-x.close-button'))
    {
        const li = e.target.parentElement;
        const text = li.querySelector('.text').textContent;

        tagWrapper.removeChild(li);
        listTag.splice(listTag.indexOf(text), 1);
        
        getTagsCount();
    }
});

/**
*   On supprime tous les tags
**/
removeAll.addEventListener('click', function(e) 
{
    tagWrapper.querySelectorAll('li').forEach(li => li.remove());

    listTag = [];

    getTagsCount();
});