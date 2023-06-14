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
    x = 10
    x = 20


    const hoje = new Date()
    const nasc = new Date(document.getElementById("nascimento").value)
    idade = hoje.getFullYear() - nasc.getFullYear()
    const mes = hoje.getMonth() - nasc.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nesc.getDate())) {
        idade--
    }
    // document.getElementById("idadesaida").innerText = idade
}

function salario() {
    saltotal = document.getElementById("salariototal").value
    totalpessoas = document.getElementById("totalpessoas").value
    mediasalario = saltotal / totalpessoas
    // if (mediasalario <= 1980) {
    //     document.getElementById("salariosaida").innerText = ("média de salário atende aos requisitos por ser inferior a 1980 reais ")
    // } else {
    //     document.getElementById("salariosaida").innerText = ("média de salário não atende aos requisitos por ser superior a 1980 reais ")
    // }
    // document.getElementById("salariosaida").innerText = mediasalario.toFixed(2)

}
function aprovado() {
    console.log(idade)
    document.getElementById("ida").innerText = (idade + " anos de idade ")
    document.getElementById("sal").innerText = (mediasalario.toFixed(0) + " como média salarial da família")
    if ((idade > 16) && (mediasalario <= 1980)) {
        document.getElementById("aprovadosaida").innerText = ("matricula aprovada ")
    } else {
        document.getElementById("aprovadosaida").innerText = ("matricula reprovada")
    }

}