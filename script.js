const app = document.querySelector('#app')
const object = document.querySelector('#object')
const up = document.querySelector('#btnUp')
const right = document.querySelector('#btnRight')
const left = document.querySelector('#btnLeft')
const down = document.querySelector('#btnDown')

up.addEventListener('click',()=>{
    let position = object.offsetTop;
    position = position-5;
    object.style.top = position + 'px';
    position = object.offsetTop;
})
left.addEventListener('click',()=>{
    let position = object.offsetLeft;
    position = position+5;
    object.style.left = position + 'px';
    position = object.offsetLeft;
})
right.addEventListener('click',()=>{
    let position = object.offsetLeft;
    position = position-5;
    object.style.left = position + 'px';
    position = object.offsetRight;
})
down.addEventListener('click',()=>{
    let position = object.offsetTop;
    position = position+5;
    object.style.top = position + 'px';
    position = object.offsetBottom;
})
