
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



// **************************numofSneakers part*****************************
const numOfSneakers = document.getElementById('number');
const changeNumMin = document.getElementById('minus');
const changeNumPlus = document.getElementById('plus');

changeNumMin.addEventListener("click",changeFunc);
changeNumPlus.addEventListener("click",changeFunc);

function changeFunc(e){
  
    if (this.value == "-" && parseInt(numOfSneakers.value)>0) numOfSneakers.value = parseInt(numOfSneakers.value)-1;
    else if (this.value == "+") numOfSneakers.value = parseInt(numOfSneakers.value)+ 1;
  
}

// **********************************************************

//***********************************************Cart part************************************************
function openCart() {
  if(document.getElementById("myCartPage").style.height == "0px"){
    document.getElementById("myCartPage").style.minHeight = "300px";
    document.getElementById("myCartPage").style.height = "auto";
  }
  else {
    document.getElementById("myCartPage").style.minHeight = "0px";
    document.getElementById("myCartPage").style.height = "0";
  }
}
// *************************************************************************

// ***************Adding items to the Cart part*******************************

document.getElementById("btnAdd").addEventListener("click",addingItem);

function addingItem(){
  if (parseInt(numOfSneakers.value) !== 0){
    document.getElementById('cartEmpty').style.display = "none"
    let fullPrice = parseInt(document.getElementById("realPrice").innerText.slice(1))*parseInt(document.getElementById("number").value);
    const newItem = document.createElement('div');
    newItem.style.display = "flex";
    newItem.style.alignItems = "center";
    newItem.style.gap = "10px"
    newItem.style.marginBottom = "20px";
    newItem.style.marginTop = "10px";

    const newImg = document.createElement('img');
    newImg.src = "images/image-product-1.jpg";
    newImg.style.height = "70px";
    newImg.style.borderRadius = "10px";
    newItem.appendChild(newImg);

    const paragraph = document.createElement('p');
    const itemContainer = document.getElementById("botCartPage");
    
    const text = document.createTextNode(`Autumn Limited Edition sneakers ${document.getElementById("realPrice").innerText} x ${document.getElementById("number").value} $${fullPrice.toFixed(2)}`);
    paragraph.appendChild(text);
    paragraph.style.fontSize = "18px";
    newItem.appendChild(paragraph);
    itemContainer.appendChild(newItem);
    
    const supBtn = document.createElement("img");
    supBtn.src ="images/icon-delete.svg";
    supBtn.style.height="20px";
    supBtn.addEventListener("click", ()=>{
      console.log("removed");
      supBtn.parentElement.remove()
    });  
    newItem.appendChild(supBtn);

    const botCart = document.getElementById('botCartPage').getElementsByTagName("div");
    for (let i=0;i<botCart.length;i++){
      botCart[i].getElementsByTagName("img")[1].setAttribute("id","Num"+i);
    }
   
    
  }
}
// document.getElementById('botCartPage').getElementsByTagName("div")

function deleteItem(e){
      document.getElementById(e).parentNode.parentNode.appendChild(document.getElementById(e).parentNode)
      console.log('hello')
    }
