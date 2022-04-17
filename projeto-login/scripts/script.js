let name = document.querySelector ('#nome')
let labelName = document.querySelector ('#labelName')
let valideNome = false

let user = document.querySelector ('#user')
let labelUser = document.querySelector ('#labelUser')
let valideUser = false

let password = document.querySelector ('#password')
let labelPassword = document.querySelector ('#labelPassword')
let validePassword = false

let mensagem = document.querySelector('#mensagem')


name.addEventListener('keyup', () => {
    if(nome.value.length <= 2) {
        labelName.setAttribute('style', 'color: red')
        labelName.innerHTML = 'Nome: Digite mais de 02 caracteres'
        name.setAttribute('style', 'border-color: red')
        valideNome = false
    } else {
        labelName.setAttribute('style', 'color: lightgreen')
        labelName.innerHTML = 'Nome'
        name.setAttribute('style', 'border-color: lightgreen')
        valideNome = true
    }
})

user.addEventListener('keyup', () => {
    if(user.value.length <= 4) {
        labelUser.setAttribute('style', 'color: red')
        labelUser.innerHTML = 'Usuário: Digite mais de 04 caracteres'
        user.setAttribute('style', 'border-color: red')
        valideUser = false
    } else {
        labelUser.setAttribute('style', 'color: lightgreen')
        labelUser.innerHTML = 'Usuário'
        user.setAttribute('style', 'border-color: lightgreen')
        valideUser = true
    }
})

password.addEventListener('keyup', () => {
    if(password.value.length <= 5) {
        labelPassword.setAttribute('style', 'color: red')
        labelPassword.innerHTML = 'Senha: Digite mais de 05 caracteres'
        password.setAttribute('style', 'border-color: red')
        validePassword = false
    } else {
        labelPassword.setAttribute('style', 'color: lightgreen')
        labelPassword.innerHTML = 'Senha'
        password.setAttribute('style', 'border-color: lightgreen')
        validePassword = true
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
    if (valideNome && valideUser && validePassword) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
        {
            nomeCampo: name.value,
            userCampo: user.value,
            passwordCampo: password.value 
        }    
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        setTimeout(()=> {
            window.location.href = './index.html'
        }, 2000)

        mensagem.innerHTML = 'Tudo certo, te redirecionando...'
        mensagem.style.backgroundColor = 'green'
    } else {
        mensagem.innerHTML = 'Dados incorretos ou faltando!'
        mensagem.style.backgroundColor = 'red'
    }
}

function entrar() {
    let userLabel = document.querySelector('#userLabel')
    let user = document.querySelector('#user')

    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')

    let mensagem = document.querySelector('#mensagem')
    let listaUser = []

    let userValide = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if (user.value == item.userCampo && password.value == item.passwordCampo) {
            
            userValide = {
                nome: item.nomeCampo,
                user: item.userCampo,
                senha: item.passwordCampo
            }
        }

    })

    if (user.value == userValide.user && password.value == userValide.senha && user.value.length >= 1 && password.value.length >= 1) {
        user.setAttribute('style', 'border-color: green')
        password.setAttribute('style', 'border-color: green')
        userLabel.setAttribute('style', 'color: green')
        passwordLabel.setAttribute('style', 'color: green')
        mensagem.innerHTML = 'Tudo certo, te redirecionando...'
        mensagem.style.backgroundColor = 'green'

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        setTimeout(()=> {
            window.location.href = './logado.html'
        }, 2000)

    } else {
        user.setAttribute('style', 'border-color: red')
        password.setAttribute('style', 'border-color: red')
        userLabel.setAttribute('style', 'color: red')
        passwordLabel.setAttribute('style', 'color: red')
        mensagem.innerHTML = 'Dados incorretos ou faltando!'
        mensagem.style.backgroundColor = 'red'
        user.focus()
    }
    
    


}