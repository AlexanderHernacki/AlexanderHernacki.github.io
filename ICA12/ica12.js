let button = document.querySelector('#js-new-quote');
let quoteText = document.querySelector('#js-quote-text');
getQuote();






button.addEventListener('click',getQuote);


async function getQuote(){
console.log("Button Is Clicked!");
let data= await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
.then((response) => response.json())
.then((data) => displayQuote(data.message));





}


function displayQuote(Quote){
quoteText.textContent=Quote;
console.log(Quote);
}