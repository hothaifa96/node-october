let m =200;
let counter=0;
function run(){
    switch(counter%4){
        case 0 :
                document.getElementById('crazy').style.marginLeft=m+'px';
                break;
        case 1 :
                document.getElementById('crazy').style.marginTop=m+'px';
                break;
        case 2 :
                document.getElementById('crazy').style.marginLeft=0+'px';
                break;
        case 3:
                document.getElementById('crazy').style.marginTop=0+'px';
                break;
    }
    counter++;
}