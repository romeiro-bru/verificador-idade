function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('OOPS!! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // var genero = ''         
        var img = document.createElement('img')
        // a imagem possui id='foto'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
        genero = 'masculino'
            if (idade >= 0 && idade < 2) {
                //  baby
                img.setAttribute('src', 'babyboy.jpg')
                resultado.innerHTML = `Detectamos um baby com ${idade} anos.`
            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'boy.jpg')
                resultado.innerHTML = `Detectamos um avatar com ${idade} anos de idade.`
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'boyteen.jpg')
                resultado.innerHTML = `Detectamos um adolescente rebelde de ${idade} anos.`
            } else if ( idade < 60) {
                // adulto
                img.setAttribute('src', 'man.png')
                resultado.innerHTML = `Você é um ninja de ${idade} anos.`
            } else {
                // idoso
                img.setAttribute('src', 'oldman.jpg')
                resultado.innerHTML = `Temos aqui um bebedor de chá de ${idade} anos!`
            }

        } else if (fsex[1].checked) {
            genero = 'feminino'
            if ( idade >= 0 && idade < 2) {
                // baby
                img.setAttribute('src', 'babygirl.png')
                resultado.innerHTML = `Detectamos uma aventureira de ${idade} anos!`
            } else if (idade < 12) {
                // criança
                img.setAttribute('src', 'girl.png')
                resultado.innerHTML = `Você é uma dobradora de ${idade} anos.`
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'teengirl.jpg')
                resultado.innerHTML = `Detectamos uma adolescente de ${idade} anos.`
            } else if (idade < 60) {
                // adulto
                img.setAttribute('src', 'woman.jpg')
                resultado.innerHTML = `Você é uma Hokage de ${idade} anos!`
            } else {
                // idoso
                img.setAttribute('src', 'oldwoman.png')
                resultado.innerHTML = `Encontramos uma amante de abacates de ${idade} anos!`
            }
        }
        // resultado.innerHTML = `Detectamos um ser ${genero} com ${idade} anos.`
        // Add um elemento, que será img
        resultado.appendChild(img)

    }
}