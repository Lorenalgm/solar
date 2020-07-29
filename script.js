var start = document.querySelector('.start');
var body = document.querySelector('.body-container');
var form = document.querySelector('.form');
var button1 = document.querySelector('.go_to_page2');
var button2 = document.querySelector('.go_to_page3');
var button3 = document.querySelector('.go_to_page4');
var pag1 = document.querySelector('.form-pag1');
var pag2 = document.querySelector('.form-pag2');
var pag3 = document.querySelector('.form-pag3');
var pag4 = document.querySelector('.form-pag4');

function HandleForm(){
    form.style.display = 'block';
    body.style.display = 'none';
}


start.addEventListener("click", HandleForm);


function HandlePaginate2(){
    pag2.style.display = 'block';
    pag1.style.display = 'none';

    var nome = document.querySelector('.nome');
    var cpf = document.querySelector('.cpf');
    var email = document.querySelector('.email');

    var info_nome = document.createElement('div');
    info_nome.textContent = `Nome: ${nome.value}`;
    
    var info_cpf = document.createElement('div');
    info_cpf.textContent = `CPF: ${cpf.value}`;

    var info_email = document.createElement('div');
    info_email.textContent = `E-mail: ${email.value}`;
    
    var data = document.querySelector('.data');
    data.append(info_nome);
    data.append(info_cpf);
    data.append(info_email);
}

button1.addEventListener("click", HandlePaginate2);

function HandlePaginate3(){
    pag3.style.display = 'block';  
    pag2.style.display = 'none';
}

button2.addEventListener("click", HandlePaginate3);


function HandlePaginate4(){
    pag4.style.display = 'block';
    pag3.style.display = 'none';
}

button3.addEventListener("click", HandlePaginate4);
