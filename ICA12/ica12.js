let button = document.querySelector('#js-new-quote');
let quoteText = document.querySelector('#js-quote-text');
getQuote();






button.addEventListener('click',getQuote);


async function getQuote(){
console.log("Button Is Clicked!");
let data= await fetch('https://www.uuidgenerator.net/api/version1')
.then((response) => response.json())
.then((data) => {
    //displayQuote(data.message);

    console.log(data);

})
.catch(error => {
    throw(error);
    alert("Something Went Wrong");
});





}


function displayQuote(Quote){
quoteText.textContent=Quote;

}