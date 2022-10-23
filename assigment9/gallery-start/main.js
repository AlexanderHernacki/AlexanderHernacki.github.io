const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images=['images/pic1.PNG','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
/* Declaring the alternative text for each image file */
//const imageText{pic1:"an image of something",pic2:"an image of something",pic3:"an image of something",pic4:"an image of something",pic5:"an image of something"};
const imageText=['an image of something','an image of something','an image of something','an image of something','an image of something'];
/* Looping through images */
const ID=['image1','image2','image3','image4','image5']

function setImage(ii){
   
    displayedImage.setAttribute('src', images[ii]);
    displayedImage.setAttribute('alt', imageText[ii]);
    
}

for(let ii=0;ii<5;ii++) {
    
    const newImage = document.createElement('img');
    newImage.setAttribute('id', ID[ii]);
    newImage.setAttribute('src', images[ii]);
    newImage.setAttribute('alt', imageText[ii]);
    thumbBar.appendChild(newImage);
    //newImage.addEventListener('click',setImage(3));
}

let image1 = document.querySelector('#image1');
image1.addEventListener('click',function(){
    setImage(0)
 });
let image2 = document.querySelector('#image2');
image2.addEventListener('click',function(){
    setImage(1)
 });
let image3 = document.querySelector('#image3');
image3.addEventListener('click',function(){
    setImage(2)
 });
let image4 = document.querySelector('#image4');
image4.addEventListener('click',function(){
    setImage(3)
 });
let image5 = document.querySelector('#image5');
image5.addEventListener('click',function(){
    setImage(4)
 });


/* Wiring up the Darken/Lighten button */

function toggleDark(){
    if(btn.getAttribute('class')=='dark'){
        btn.setAttribute('class','light');
        btn.textContent='Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class','dark');
        btn.textContent='Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }



}
btn.addEventListener('click',toggleDark)