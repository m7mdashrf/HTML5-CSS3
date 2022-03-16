window.addEventListener("load",doitfirst);
function doitfirst() {
    mycanvas=document.getElementById("mycanvas");
    mycontext=mycanvas.getContext('2d');
    mycanvas.width=window.innerWidth;
    mycanvas.height=window.innerHeight;
    // mycanvas.addEventListener("mousedown",drawcircle);
    isdrawable=false;
    mycanvas.addEventListener("mousemove",drawcircle);
    mycanvas.addEventListener("mousedown",enabledrawing);
    mycanvas.addEventListener("mouseup",disabledrawing);
    radius=10;
    incre=document.getElementById("incre");
    decre=document.getElementById("decre");
    radiusvalue=document.getElementById("radiusvalue");

    incre.addEventListener('click',increaseradius);
    decre.addEventListener('click',decreaseradius);
    
  
    allcolors=['red' ,'blue','green','brown','yellow','lightblue','limegreen','lightslategrey','pink']
    colorsbar=document.getElementById('colorsbar');
    for (let index = 0; index < allcolors.length; index++) {
        creatediv=document.createElement("div");
        creatediv.style.backgroundColor=allcolors[index];
        creatediv.addEventListener("click",changecolor);
        creatediv.className='colors';
        if(allcolors[index]==localStorage.getItem("selectedcolor"))
        {
            creatediv.className+=' active';
            mycontext.fillStyle=creatediv.style.backgroundColor;
        }
        colorsbar.appendChild(creatediv);
    }
}
function changecolor(e) {
    console.log(e.target);
    oldselectedcolor=document.getElementsByClassName("active")[0];
    if(oldselectedcolor!=null)
        oldselectedcolor.className="colors";
    newclickedone=e.target;
    newclickedone.className+=" active";
    mycontext.fillStyle=newclickedone.style.backgroundColor; 
    localStorage.setItem("selectedcolor",newclickedone.style.backgroundColor)
    // var test=document.createElement("a");
    // test.className
}

function increaseradius() {
    radius++; 
    checkradius(radius);
    
    radiusvalue.innerText=radius;
}
function decreaseradius() {
    radius--;
    checkradius(radius);
    
}
function checkradius(newradius) {
    if(newradius>50)
        newradius=50;
    else if(newradius<10)
        newradius=10;
    radius=newradius; 
    radiusvalue.innerText=radius;
    
}
function enabledrawing() {
    isdrawable=true;
    
}
function disabledrawing() {
    isdrawable=false;
    
}
function drawcircle(e) {
    if(isdrawable){
        mycontext.beginPath();
        mycontext.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
        mycontext.fill();
        mycontext.closePath();
    }
}