function changeColor(){
    let changeLol = document.getElementById('mySky').classList;
    if(changeLol.contains('blue')){
        changeLol.add('grey');
        changeLol.remove('blue');
    }else{
        changeLol.add('blue');
        changeLol.remove('grey');
    }
}