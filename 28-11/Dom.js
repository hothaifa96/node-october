


function clearbtn(){
    if(document.getElementById('in').value.includes('i')){
        alert(' naaah not today');
        document.getElementById('in').value='';
    }
    else
        document.body.style.backgroundColor='green';
}