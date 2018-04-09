function getImageBigger(e) {
  if(e.type === 'click' && !e.target.classList.contains('middleSizeImg')){
    e.target.classList.add('middleSizeImg');
    e.target.addEventListener('mouseout',function(e){
      e.target.classList.remove('middleSizeImg');
    })
  }
 else{
    e.target.classList.remove('middleSizeImg');
    fullScreenImg.classList.add('makeBiggerImg');
    fullScreenImg.classList.remove('showImgFully');
    fullScreenImg.src = this.src; 
    addImageBtn.classList.remove('addImageBtn');

    let createBtn = (type,src,btnClass,func) =>{
    let wrapper = document.querySelector('.wrapper');
    let btn = document.createElement(type);
    btn.src = src;
    btn.classList.add(btnClass);
    wrapper.appendChild(btn);
    btn.addEventListener('click',func);
}  
  createBtn('img','img/left.png','leftBtn',turnImgLeft);
  createBtn('img','img/right.png','rightBtn',turnImgRight);
  createBtn('img','img/close.png','closeBtn',closeImg);
 } 
};  