const images = document.querySelectorAll('.dragedImg');
const dropArea = document.querySelector('.dropArea');
const gallary =document.querySelector('.gallary');

// drag functionality
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', startDrag)
    images[i].addEventListener('dragend', endDrag)
}

let isDropped = false;
let NoOfDroppedImg = 0;

function startDrag(ev){
    ev.dataTransfer.setData('myImg' , ev.target.outerHTML);
}

function endDrag(ev){
    ev.preventDefault();
    if(isDropped)
        ev.target.remove();
    if(NoOfDroppedImg == images.length){
        gallary.innerHTML = `<h2>Empty</h2>`
        gallary.style.backgroundColor = 'lightcoral'
    } 
}


// drop functionality
dropArea.addEventListener('drop',(ev)=>{
    ev.preventDefault();
    dropArea.innerHTML += ev.dataTransfer.getData('myImg');
    isDropped =true;
    NoOfDroppedImg++;
});

dropArea.addEventListener('dragenter', (ev)=>{
    ev.preventDefault();
});
dropArea.addEventListener('dragover', (ev)=>{
    ev.preventDefault();
});



