//Добавлення картинок
 function addNewImage(...images){
 for(let i = 0; i<images.length; i++){
 let createImage = document.createElement('img');
 createImage.src = `img/${images[i]}.jpg`;
 imagesSrcArray.push(createImage.src);
 }
};
 let imagesSrcArray = []; 
addNewImage(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28);

let visibleImg = imagesSrcArray.slice();
let visibleImages = visibleImg.slice(0,10);
let unvisibleImg = _.difference(visibleImg,visibleImages);
let unvisibleImages = unvisibleImg.slice();

window.onload = addImagesToVisible();
function createImg(whichLoop,listener,whereToPaste,classOfImg,classOfDiv){
 let createDiv = document.createElement('div');
 createDiv.classList.add(classOfDiv);
 let gallery = document.querySelector(whereToPaste);
 gallery.appendChild(createDiv);
 let createImage = document.createElement('img');
 createImage.classList.add(classOfImg);
 createImage.src = whichLoop;
 createDiv.appendChild(createImage);
 createImage.addEventListener('click',listener);
 if(whereToPaste === '.gallery'){
 	createImage.addEventListener('click',getImageBigger);
 let createSmallCloseImgBtn = document.createElement('img');
 createSmallCloseImgBtn.src = 'img/close.png';
 createSmallCloseImgBtn.classList.add('smallCloseBtn');
 createDiv.appendChild(createSmallCloseImgBtn);
 createSmallCloseImgBtn.addEventListener('click', makeUnvisible);
 createSmallCloseImgBtn.addEventListener('click', deleteImgSmall);
 }
}
function modalWindow(){
	let imagesForAdding = document.querySelector('.imagesForAdding');
	imagesForAdding.classList.toggle('displayNone');
	let unvisibleImg = document.querySelector('.imagesForAdding').innerHTML = '';
	let visibleImg = document.querySelector('.gallery').innerHTML = '';
	addImagesToVisible();	
}
function makeVisible(){
	let indexOfLink = unvisibleImages.indexOf(this.src);
    visibleImages.push(unvisibleImages[indexOfLink]);
    unvisibleImages.splice(indexOfLink,1);
	let imagesForAdding = document.querySelector('.imagesForAdding');
	imagesForAdding.classList.toggle('displayNone');
	let gallery = document.querySelector('.imagesForAdding').innerHTML = '';
	let gallery2 = document.querySelector('.gallery').innerHTML = '';
	addImagesToVisible();
}
function makeUnvisible(){
	let imgToSrc  = visibleImages.indexOf(this.previousElementSibling.src);
	unvisibleImages.push(visibleImages[imgToSrc]);
	visibleImages.splice(imgToSrc,1);
	let unvisibleImg = document.querySelector('.imagesForAdding').innerHTML = '';
	let visibleImg = document.querySelector('.gallery').innerHTML = '';
	addImagesToVisible();
}
function hideImagesForAdding(){
	 let imagesForAdding = document.querySelector('.imagesForAdding');
	if(!imagesForAdding.classList.contains('displayNone')){
		imagesForAdding.classList.add('displayNone');
	}
}
 function addImagesToVisible(){
 for(let i=0; i<visibleImages.length; i++){
 createImg(visibleImages[i],makeUnvisible,'.gallery','imgStyle','divOfImg');
 }
 for(let i=0; i<unvisibleImages.length; i++){
 createImg(unvisibleImages[i],makeVisible,'.imagesForAdding','imgStyleForUnvisibleImg','divOfImgForUnvisibleImg');
 }
};
let wrapper = document.querySelector('.wrapper');
wrapper.addEventListener('click',hideImagesForAdding);
 
let addImageBtn = document.querySelector('.addImageBtn');
addImageBtn.addEventListener('click', modalWindow);
