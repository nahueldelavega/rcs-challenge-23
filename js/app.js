let skyCloudy = document.getElementById('skyChangeC');
let skySunny = document.getElementById('skyChangeS');

function changeColor(color){
    document.body.sky.backgroundColor = color;
}

function changeSkyColor(){
    changeColor('grey');
}