
let hamscore=0;
let tofuscore=0

function addham(){
    let val = document.getElementById('ham').innerHTML;
    val=parseInt(val);
    val++;
    document.getElementById('ham').innerHTML=val;
}

function addtofu(){
    document.getElementById('tofu').innerHTML= ++tofuscore;
}


arr[0]=function (){
    let images=document.getElementsByClassName('image');  //[ {} , {} ]
        for(i=0 ; i<images.length;i++){
            images[i].style.width='50px';
        }

}


