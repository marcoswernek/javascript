function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    /*var minutos = data.getMinutes();
    var segundos = data.setSeconds();
    var timer = setInterval(carregar,1000);
    msg.innerHTML= `Horas Local:${hora} Horas:${minutos} minutos: ${segundos}segundos`;*/
    msg.innerHTML = `Agora são ${hora}horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#FEA409'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#B46020'
    } else {
        //BOA NOITE!!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#070908'
    }
}