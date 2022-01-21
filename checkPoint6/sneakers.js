
// ****************** The side nav part *************************************
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("fil").classList.remove("lightFilter")
    document.getElementById("fil").classList.add("darkFilter")
    // document.querySelector(".filtre").style.display="block"
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("fil").classList.add("lightFilter");
    document.getElementById("fil").classList.remove("darkFilter");
    // document.querySelector(".filtre").style.display="none"
  }

// **********************************************************************************

// *****************  The slide part ************************************************
const slideLeft = document.getElementById('slide-bar-btnLeft');
const slideRight = document.getElementById('slide-bar-btnRight');
const slide = document.querySelectorAll('.slide');
let imageNum = 0;

slideLeft.addEventListener("click",slideToLeft);
slideRight.addEventListener("click",slideToRight);

function reset() {
  for (let i = 0; i < slide.length; i++) {
    if(slide[i].style.display != "none"){
       slide[i].style.display = "none";
    } 
  }
}

function slideToLeft(){
    reset();
    if (imageNum === 0) {
      imageNum = slide.length;
    }
    imageNum--;
    slide[imageNum].style.display = "flex";
}

function slideToRight(){
    reset();
    if (imageNum === slide.length - 1) {
      imageNum = -1;
    }
    imageNum++;
    slide[imageNum].style.display = "flex";
}
// *****************************************************************
function openCart() {
    document.getElementById('cart')
}

