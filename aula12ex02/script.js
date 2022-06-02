function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'cri-o.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jov-o-21.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adul-o-50.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'ido-o.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'cri-a.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jov-a.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adul-a-50.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'ido-a.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}