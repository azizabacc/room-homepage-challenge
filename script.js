const logo = document.getElementById('logo');
let topNav = document.getElementById('topnav');
let iconBurgerMenu = document.querySelector('.icon');
iconBurgerMenu.innerHTML ='<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>'
const leftArrow =document.getElementById('leftArrow');
const rightArrow =document.getElementById('rightArrow');
const topSection = document.getElementById('topSection');
const mobileDesign = window.matchMedia("(max-width: 700px)")
const myFunction=() =>{
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      logo.style.display ='block';
      topNav.style.width = '56vw';
      topNav.classList.toggle('activeMenu')
      iconBurgerMenu.innerHTML='';
      iconBurgerMenu.innerHTML ='<svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>'

    } else {
      x.style.display = "block";
      logo.style.display ="none";
      topNav.style.width = '100vw';
      topNav.classList.toggle('activeMenu')
      iconBurgerMenu.innerHTML='';
      iconBurgerMenu.innerHTML ='<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>'

    }
  }
  const showDivs= (n)=> {
    
    var i;
    var x = document.getElementsByClassName("shopSection");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "flex";  
    if(mobileDesign.matches){
        topSection.style.backgroundImage = `url(images/mobile-image-hero-${slideIndex}.jpg)`
    }else{
        topSection.style.backgroundImage = `url(images/desktop-image-hero-${slideIndex}.jpg)`

    }
    

  }
let slideIndex = 1;
showDivs(slideIndex);

const plusDivs= (n) =>{
  showDivs(slideIndex += n);
}


leftArrow.addEventListener('click',()=>{
    console.log('left');
    plusDivs(-1)
})
rightArrow.addEventListener('click',() =>{
    console.log('right');
    plusDivs(1)})