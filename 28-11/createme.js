
function createImage(){
    let newImage = document.createElement('img');
    newImage.src='./images/pan.jpg' ;
    //newImage.setAttribute('src','./images/pan.jpg');
    newImage.style.width='120px';
    newImage.style.height='200px';
    document.body.appendChild(newImage);
}