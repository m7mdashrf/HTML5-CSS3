let box = document.getElementById("block");
let on = document.getElementById("on");
let off = document.getElementById("off");
on.addEventListener("click", ()=>{
    box.classList.add("animateStart");
    box.classList.remove("animatePause");
    console.log("run");
})
off.addEventListener("click", ()=>{
    box.classList.add("animatePause");
    console.log("stop");
})
