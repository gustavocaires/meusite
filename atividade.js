function entrar() {

    if (login.value == "gustavo" && senha.value == "admin") {
        window.location = 'site.html';
    }
    else if (login.value == "" || senha.value == "") {
        alert( "Preencha os campos para fazer login!");
    }
    else {
        alert("Senha ou Login incorretos!");
    }
}

function voltar(){
    window.location = 'login.html'; 
}

function cadastrar(){
    window.location = 'cadastro.html';

    if (senha.value == confirmar_senha.value && nome.value) {
        window.location = 'site.html';
    }
    else if (login.value == "" || senha.value == "" || nome.value == "") {
        alert( "Preencha os campos para fazer o cadastro!");
    }
    else {
        alert("Senha ou Login incorretos!");
    }
}