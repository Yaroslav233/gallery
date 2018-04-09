let fullScreenImg = document.querySelector('.showImgFully'); //Картинка яка відкривається на повний екран 

function turnImgLeft(){TurnImage(-1)};       
function turnImgRight(){TurnImage(+1)};
function closeImg(){                     
fullScreenImg.classList.add('showImgFully');
let leftBtn = document.querySelector('.leftBtn').remove();
let rightBtn = document.querySelector('.rightBtn').remove();
let closeBtn = document.querySelector('.closeBtn').remove();
 addImageBtn.classList.add('addImageBtn');
}; 
function TurnImage (num){                                    // Як переключається картинка
	let currentImgSrc = fullScreenImg.src;
    let indexOfCurrenImg = visibleImages.indexOf(currentImgSrc);
 if(indexOfCurrenImg + num <= -1){
 	indexOfCurrenImg = visibleImages.length;
    fullScreenImg.src = visibleImages[indexOfCurrenImg+num];
    fullScreenImg.classList.add('makeBiggerImg');
 }
  else if(indexOfCurrenImg + num >= visibleImages.length){ 
  indexOfCurrenImg = -1;
  fullScreenImg.src = visibleImages[indexOfCurrenImg+num];
  fullScreenImg.classList.add('makeBiggerImg');
 }
 else{
 	 fullScreenImg.src = visibleImages[indexOfCurrenImg+num];
     fullScreenImg.classList.add('makeBiggerImg');
 }
};
function deleteImgSmall(){
	this.parentElement.remove();
}


