var start = document.querySelector('.start');
var body = document.querySelector('.body-container');
var form = document.querySelector('.form');

function HandleForm(){
    form.style.display = 'block';
    body.style.display = 'none';
}


start.addEventListener("click", HandleForm);