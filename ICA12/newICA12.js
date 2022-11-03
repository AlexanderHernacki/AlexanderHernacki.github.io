let button = document.querySelector('#js-new-quote');
let quoteText = document.querySelector('#js-quote-text');
let copy = document.querySelector('#js-tweet');
getQuote();






button.addEventListener('click',getQuote);
copy.addEventListener('click',copyText);


async function getQuote(){
console.log("Button Is Clicked!");
let data= await fetch('https://www.uuidgenerator.net/api/version1')
.then((response) => response.text())
.then((data) => {
    displayQuote(data);

    //console.log(data);

})
.catch(error => {
    throw(error);
    alert("Something Went Wrong");
});





}


function displayQuote(Quote){
quoteText.textContent=Quote;

}

function copyText() {
    // Get the text field
    var copyText = document.getElementById("js-quote-text");
  
    /*// Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices*/
  
     // Copy the text inside the text field
     console.log(copyText.textContent);
    navigator.clipboard.writeText(copyText.textContent);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.textContent);
  } 