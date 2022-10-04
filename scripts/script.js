function carregar(){
    var msgHoras = window.document.querySelector('div#horas')
    var img = window.document.querySelector('div#imagem')

    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    msgHoras.innerHTML = `${horas}:${minutos}`

        
    if (horas >= 5 && horas <= 7){
        img.innerHTML = "<img src='imagens/sunrise.png'>"
    }
}