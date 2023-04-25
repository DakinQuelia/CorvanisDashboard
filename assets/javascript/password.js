/**
*   Style       : CorvanisDashboard 
*   Fichier     : password.js
*   Version     : 1.0.0.
*   Auteur(s)   : Dakin Quelia <dakinquelia@gmail.com>
**/
const showPass = document.querySelector('.password-container .form .form-group .input-group .show-pass');
const inputPass = document.querySelector('.password-container .form .form-group .input-group input');
const strengthContainer = document.querySelector('.strength-container');
const strengthIndicator = document.querySelector('.strength-container .strength-bar');
const listColors = ['#FF002E', '#FCDE05', '#249FD5', '#67CA5B'];
let numstrength = 0;
let isShow = false;
let isContainsNum = false;
let isContainsAlp = false;
let isContainsSymbol = false;
let isGreater8 = false;
 
/**
*   On affiche/masque le mot de passe
**/
showPass.addEventListener('click', function()
{
    isShow = !isShow;

    if (isShow)
    {
        showPass.classList.replace('bxs-show', 'bxs-hide');
        inputPass.type = 'text';
    }
    else 
    {
        showPass.classList.replace('bxs-hide', 'bxs-show');
        inputPass.type = 'password';
    }
});

/**
*   On affiche/masque l'information sur la vérification.
**/
inputPass.addEventListener("focus", function()
{
    strengthContainer.style.display = "block";
});

inputPass.addEventListener("blur", function()
{
    strengthContainer.style.display = "none";
});

/**
*   On vérifie le mot de passe lorsqu'il est tapé.
**/
inputPass.addEventListener('input', function() 
{
    checkPassword(this.value);

    strengthIndicator.style.setProperty('--width', `${numstrength * 25}%`);
    strengthIndicator.style.setProperty('--bg-color', listColors[numstrength - 1]);
});

/**
*   Cette fonction permet de vérifier le mot de passe.
*
*   @param {string} password
*
*   @return {void}
**/
function checkPassword(password)
{
    const space = new RegExp('/\s/');
    const number = new RegExp('.*[0-9]');
	const alphabet = new RegExp('.*[a-zA-Z]');
	const symbol = new RegExp('.*\\W');
	const greater8 = new RegExp('.{8,}');

    if (this.value === "")
    {
        numstrength = 0;
    }

    if (space.test(password))
    {
        throw new Error(`Il ne peut y avoir d'espace`);
    }

    if (number.test(password))
    {
        if (!isContainsNum)
        {
            numstrength++;
            isContainsNum = true;
        }
        else 
        {
            if (isContainsNum)
            {
                numstrength--;
                isContainsNum = false;
            }
        }
    }

    if (alphabet.test(password))
    {
        if (!isContainsAlp)
        {
            numstrength++;
            isContainsAlp = true;
        }
        else 
        {
            if (isContainsAlp)
            {
                numstrength--;
                isContainsAlp = false;
            }
        }
    }

    if (symbol.test(password))
    {
        if (!isContainsSymbol)
        {
            numstrength++;
            isContainsSymbol = true;
        }
        else 
        {
            if (isContainsSymbol)
            {
                numstrength--;
                isContainsSymbol = false;
            }
        }
    }
    
    if (greater8.test(password))
    {
        if (!isGreater8)
        {
            numstrength++;
            isGreater8 = true;
        }
        else 
        {
            if (isGreater8)
            {
                numstrength--;
                isGreater8 = false;
            }
        }
    }
}