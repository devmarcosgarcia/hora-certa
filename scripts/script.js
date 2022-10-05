
var controleHoras = window.document.querySelector('div#controle input')

controleHoras.addEventListener('input', cliqueControle)
controleHoras.addEventListener('mouseout', atualizar)

function atualizar(){
    carregar()
}

function cliqueControle(){
    var msgHoras = window.document.querySelector('div#horas')
    var img = window.document.querySelector('div#imagem')
    
    var horas = Number(controleHoras.value)
           
   msgHoras.innerHTML = horas

    if (horas >= 5 && horas <= 7){      //sunrise
        img.innerHTML = "<img src='imagens/sunrise.png'>"
    }else if(horas >= 8 && horas <= 11){     //morning
        img.innerHTML = "<img src='imagens/morning.png'>"
    }else if(horas >= 12 && horas <= 14){     //noon  
        img.innerHTML = "<img src='imagens/noon.png'>"
    }else if(horas >= 15 && horas <= 17){     //afternoon
        img.innerHTML = "<img src='imagens/afternoon.png'>"
    }else if(horas >= 18 && horas <= 19){     // evening
        img.innerHTML = "<img src='imagens/evening.png'>"
    }else{       //night
        img.innerHTML = "<img src='imagens/night.png'>"
    }
}


function carregar(){
    var msgHoras = window.document.querySelector('div#horas')
    var img = window.document.querySelector('div#imagem')
  
        var data = new Date()
        var horas = data.getHours()
        var minutos = data.getMinutes()
    
        if (minutos >= 0 && minutos < 10){
            minutos = `0${minutos}`    
        }
    
        msgHoras.innerHTML = `${horas}:${minutos}`
        
        window.document.querySelector('div#controle input').value = horas
            
        if (horas >= 5 && horas <= 7){      //sunrise
            img.innerHTML = "<img src='imagens/sunrise.png'>"
        }else if(horas >= 8 && horas <= 11){     //morning
            img.innerHTML = "<img src='imagens/morning.png'>"
        }else if(horas == 12 && horas <= 15){     //noon  
            img.innerHTML = "<img src='imagens/noon.png'>"
        }else if(horas >= 16 && horas <= 17){     //afternoon
            img.innerHTML = "<img src='imagens/afternoon.png'>"
        }else if(horas >= 18 && horas <= 19){     // evening
            img.innerHTML = "<img src='imagens/evening.png'>"
        }else{       //night
            img.innerHTML = "<img src='imagens/night.png'>"
        }
    
}