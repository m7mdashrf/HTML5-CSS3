   //showing information 
const informationBtn = document.getElementById('information');
const informationContainer = document.querySelector('.informationContainer')
const latSec = document.getElementById('lat');
const longSec =document.getElementById('long');
const accurcySec = document.getElementById('accurcy');
const timeSec = document.getElementById('TimeStamp');

// const showBox = document.querySelector('.showBox');
const mapArea = document.getElementById('mapArea');

informationBtn.addEventListener('click',(ev)=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
        mapArea.style.display = 'none';
        informationContainer.style.display = 'flex';
    }
        
    else
        window.alert("Please update your browser first")   
});

function showPosition(postion){

    let lat = postion.coords.latitude;
    latSec.innerText = lat.toFixed(2)+' Deg';

    let long = postion.coords.longitude;
    longSec.innerText = long.toFixed(2)+' Deg';

    let Accurcy = postion.coords.accuracy;
    accurcySec.innerText = Accurcy.toFixed(2)+' M';

    let time = postion.timestamp;
    let d =new Date(time);
    timeSec.innerText = d.toDateString();
}

//showing the map

// calling google
const mapShowBtn = document.getElementById('map');


mapShowBtn.addEventListener('click',(ev)=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showMap);
        mapArea.style.display = '';
        informationContainer.style.display = 'none';
    }
    else
        window.alert("Please update your browser first")   
})

function showMap(postion){
    let lat = postion.coords.latitude;
    let long = postion.coords.longitude;
    console.log(lat,long);
    let location =new google.maps.LatLng(lat , long);
    let mapSpects ={zoom:15 , center:location}
    new google.maps.Map(mapArea,mapSpects);
}

