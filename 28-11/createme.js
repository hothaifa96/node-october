function createImage(){
    let newImage = document.createElement('img');
    newImage.src='./images/pan.jpg' ;
    //newImage['src'] = 
    //newImage.setAttribute('src','./images/pan.jpg');
    newImage.style.width='120px';
    newImage.style.height='200px';
    let imgdiv= document.getElementById('images_div');
    let input= document.getElementById('in');
    let par= document.getElementById('p');
    let a= par.firstChild;
    
    input.before(newImage)
    // imgdiv.appendChild(newImage);
}




function Remove_El(){
    let div_el= document.getElementById('div');
    let firstele= div_el.firstElementChild;
    if(firstele)
        div_el.removeChild(firstele);

}