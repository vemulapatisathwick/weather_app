//selector variable
var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')


// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
// You don't need an API key for this to work at the moment, but this will change eventually.
apik = "3045dd712ffe6e702e3245525ac7fa38"
//kelvin to celcious
function convertion(val){
    return (val - 273).toFixed(2)
}
//fetch
btn.addEventListener('click', function(){
    city.innerHTML = "Loading...";
    temp.innerHTML = "";
    description.innerHTML = "";
    wind.innerHTML = "";

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempature = data['main']['temp']
        var wndspd = data['wind']['speed']

        city.innerHTML=`City: ${nameval}`
        temp.innerHTML = `Temperature: ${ convertion(tempature)} C`
        description.innerHTML = `Conditions: ${descrip}`
        wind.innerHTML = `Wind Speed: ${wndspd} km/h`
    })
    .catch(err => {
        city.innerHTML = "Error: City not found!";
        temp.innerHTML = "";
        description.innerHTML = "";
        wind.innerHTML = "";
    })
})

// Add a moving background effect
document.body.style.backgroundPosition = "0px 0px";
let x = 0;

function moveBackground() {
    x += 1;
    document.body.style.backgroundPosition = `${x}px ${x}px`;
    requestAnimationFrame(moveBackground);
}

moveBackground();

