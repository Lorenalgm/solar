var start = document.querySelector('.start');
var body = document.querySelector('.body-container');
var form = document.querySelector('.form');
var button1 = document.querySelector('.go_to_page2');
var button2 = document.querySelector('.go_to_page3');
var pag1 = document.querySelector('.form-pag1');
var pag2 = document.querySelector('.form-pag2');
var pag3 = document.querySelector('.form-pag3');

function HandleForm(){
    form.style.display = 'block';
    body.style.display = 'none';
}


start.addEventListener("click", HandleForm);


function HandlePaginate2(){
    pag2.style.display = 'block';
    pag1.style.display = 'none';
}

button1.addEventListener("click", HandlePaginate2);

function HandlePaginate3(){
    pag3.style.display = 'block';
    pag2.style.display = 'none';
}

button2.addEventListener("click", HandlePaginate3);