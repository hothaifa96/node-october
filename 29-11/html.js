let counter=[0,0,0,0,0];

// l1
function increment(id){
    let label = document.getElementById(id);
    let indexinString=id.charAt(1);
    let index= parseInt(indexinString)  -1;
    label.innerHTML = ++counter[index];
    headCounter();
}

function headCounter(){
    let hc=document.getElementById('h1');
    hc.innerHTML = counter.reduce((sum,a)=>sum+a,0);
}

function decrement(id){
    let label = document.getElementById(id);
    let indexinString=id.charAt(1);
    let index= parseInt(indexinString)  -1;
    label.innerHTML = --counter[index];
    headCounter();
}

