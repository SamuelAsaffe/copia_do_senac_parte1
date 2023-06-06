// function theme() {
//     let bori = document.body 
//     let tema = bori.getAttribute('data-bs-theme')
//     let butao = document.getElementById('portalaluno')
//     if (tema =='dark') {
//         bori.setAttribute('data-bs-theme', 'light')
//         butao.classList.add('btn-orange')
//         butao.classList.remove('btn-outline-orange')
//     } else {
//         bori.setAttribute('data-bs-theme', 'dark')
//         butao.classList.add('btn-outline-orange')
//         butao.classList.remove('btn-orange')

//     }
// }

function calcularIdade() {
const hoje = new Date ( )
const nasc = new Date(document.getElementById("").value)
let idade = hoje.getFullYear() - nasc.getFullYear()
const mes = hoje.getMonth( ) - nasc.getMonth( )
if (mes < 0|| (mes ===0 & hoje.getDate() < nesc.getDate() ) ) {
    idade--
}

}