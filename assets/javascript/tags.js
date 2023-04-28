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
const suggestions = document.querySelector('.suggestion-tags');
const allSuggestion = suggestions.querySelectorAll('li');

let listTag = [];

const suggestList = [
    { name: 'Javascript' },
    { name: 'CSS' },
    { name: 'PHP' },
    { name: 'HTML' }
];

if (suggestList !== undefined)
{
    getItemSuggestion(suggestList);
}



/**
*   On ajoute le tag à la liste 
**/
input.addEventListener('input', function()
{
    let inputValue = this.value;

    if (inputValue !== "")
    {
        if (suggestList !== undefined || suggestList !== null)
        {
            getSuggestionTags(suggestList, inputValue);
        }
    }

    if (inputValue.includes(','))
    {
        const str = inputValue.toLowerCase().replace(/ +/g, ' ').split(',');

        str.forEach((item) => 
        { 
            const text = item.trim();

            if (!listTag.includes(text) && text !== "" && text !== " ")
            {
                listTag.push(text);

                addTag();
              
				this.focus();
            }
        });

        getTagsCount();

        inputValue = "";
    }
});

/**
*   Lorsqu'on appuye sur la touche "Entrée"
**/
input.addEventListener('enter', function()
{
    
});

/**
*   On
**/
input.addEventListener('keydown', function(e)
{
    let inputValue = this.value;

    if (e.key === 'Backspace')
    {
        if (listTag.length >= 1) 
        {
			if (inputValue === '') 
            {
				const li = tagWrapper.querySelectorAll('li');

				input.value = li[li.length - 1].textContent + " ";
				li[li.length - 1].remove();
				listTag.pop();

				getTagsCount();
			}
		}
    }
});

/**
*   On supprime tous les tags.
**/
removeAll.addEventListener('click', function(e) 
{
    tagWrapper.querySelectorAll('li').forEach(li => li.remove());

    listTag = [];

    getTagsCount();

	input.value = '';
	input.focus();
});

/**
*   On supprime le tag de la liste.
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
*   Cette fonction récupère la liste suggérée des tags.
* 
*   @param {array} suggestList 
*   @param {InputHTMLElement} input
*   
*   @return {void}
**/
function getSuggestionTags(suggestList, input)
{
    const itemListFilter = suggestList.filter(item => { return item.name.toLowerCase().includes(input.toLowerCase()) });
    
    suggestions.querySelectorAll('li').forEach(item => item.remove());
        
    itemListFilter.forEach((item) => 
    {
        const li = document.createElement('li');
        const liText = document.createTextNode(item.name.toLowerCase());
                
        li.appendChild(liText);
        suggestions.appendChild(li);
    });
        
    if (itemListFilter.length === 0) 
    {
        const li = document.createElement('li');
        const liText = document.createTextNode('Introuvable');
        
        li.className = 'not-found';
        li.appendChild(liText);
        
        suggestions.appendChild(li);
    }
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
*   Cette fonction retourne la liste de suggestions des tags.
*
*   @return {void}
**/
function getItemSuggestion(listItems)
{
    listItems.forEach((item) => 
    {
        const li = document.createElement('li');
        const liText = document.createTextNode(item.name.toLowerCase());
            
        li.appendChild(liText);
        suggestions.appendChild(li);
    });
}