/**
*   Style       : CorvanisDashboard 
*   Fichier     : tags.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const input = document.querySelector('.wrapper .tags .input-tag');
const tagWrapper = document.querySelector('.wrapper .tags');
const removeAllBtn = document.querySelector('.bottom .remove-all');
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
            getAutoSuggestion(suggestList, inputValue);
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

    // Récupération des tags suggérés
    getSuggestionTags(allSuggestion, inputValue);

    // Suppression du tag de la liste
    removeTag();
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
removeAllBtn.addEventListener('click', function(e) 
{
    removeAll();
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
*   Cette fonction récupère la liste de tous les tags suggérés.
*   
*   @param {array} allSuggestion
*   @param {InputHTMLElement} input
*   
*   @return {void}
**/
function getSuggestionTags(allSuggestion, input)
{
    allSuggestion.forEach((item) => 
    {
        item.addEventListener('click', function() 
        {
            if (!listTag.includes(this.textContent)) 
            {
                listTag.push(this.textContent);

                addTag();
            }

            input.value = '';

            const allRmBtn = document.querySelectorAll('.tags > li .bx.bx-x.close-button');

            allRmBtn.forEach(item => 
            {
				item.addEventListener('click', function () 
                {
					listTag = listTag.filter(i=> { return i !== this.parentElement.textContent });

					this.parentElement.remove();

					getTagsCount();

					input.focus();
				})
			})
        });
    });
}

/**
*   Cette fonction récupère la liste des tags sur base de l'entrée de l'utilisateur.
* 
*   @param {array} suggestList 
*   @param {InputHTMLElement} input
*   
*   @return {void}
**/
function getAutoSuggestion(suggestList, input)
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

/**
*   Cette méthode permet de supprimer le tag précis.
*
*   @return {void}
**/
function removeTag()
{
    const allRmBtn = document.querySelectorAll('.tags > li .bx.bx-x.close-button');

	allRmBtn.forEach(item=> 
    {
		item.addEventListener('click', function () 
        {
			listTag = listTag.filter((i) => { return i !== this.parentElement.textContent });

			this.parentElement.remove();

			getTagsCount();
			
            input.focus();
		});
	});
}

/**
*   Cette fonction permet de supprimer tous les tags.
*
*   @return {void}
**/
function removeAll()
{
    tagWrapper.querySelectorAll('li').forEach(li => li.remove());

    listTag = [];

    getTagsCount();

	input.value = '';
	input.focus();
}