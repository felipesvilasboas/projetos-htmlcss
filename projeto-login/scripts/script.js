let name = document.querySelector ('#nome')
let labelName = document.querySelector ('#labelName')

let user = document.querySelector ('#user')
let labelUser = document.querySelector ('#labelUser')

let password = document.querySelector ('#password')
let labelPassword = document.querySelector ('#labelPassword')


name.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Nome: Digite mais de 02 caracteres'
        name.setAttribute('style', 'border-color: red')
    } else {
        labelName.setAttribute('style', 'color: lightgreen')
        labelName.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color: lightgreen')
    }
})

user.addEventListener('keyup', () => {
    if(user.value.length <= 4) {
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Usuário: Digite mais de 04 caracteres'
        user.setAttribute('style', 'border-color: red')
    } else {
        labelUser.setAttribute('style', 'color: lightgreen')
        labelUser.innerHTML = 'Usuário'
        user.setAttribute('style', 'border-color: lightgreen')
    }
})

password.addEventListener('keyup', () => {
    if(password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Senha: Digite mais de 05 caracteres'
        password.setAttribute('style', 'border-color: red')
    } else {
        labelPassword.setAttribute('style', 'color: lightgreen')
        labelPassword.innerHTML = 'Senha'
        password.setAttribute('style', 'border-color: lightgreen')
    }
})


function clickEmoji() {
    if (password.getAttribute('type') == 'password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
}

function add() {

}