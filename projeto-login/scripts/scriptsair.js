if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar')
    window.location.href = './index.html'
}

function sair() {
    localStorage.removeItem('token')
    window.location.href = './index.html'
}