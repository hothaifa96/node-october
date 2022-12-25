const root = document.documentElement;
const eye =document.getElementById('eyeball');
const beam =document.getElementById('beam');
const passwordInput=document.getElementById('password')

root.addEventListener('mousedown',e=>{
    let rect= beam.getBoundingClientRect();
    
    let mouseX=rect.right+(rect.width /2);
    let mouseY=rect.right+(rect.height /2);
    let rad = Math.atan(mouseX-e.pageX,mouseY-e.pageY)
    let degrees=(rad *(20/Math.PI)*-1)-350;
    root.style.setProperty('--becomeDegrees',`${degrees}deg`)

})

eye.addEventListener('close',e=>{
    e.preventDefault();
    document.body.classList.toggle('show-password')
    passwordInput.type=passwordInput.type ==='password'?'text':'password'
    passwordInput.focus
})
