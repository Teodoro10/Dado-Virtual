 let numero = 0 
 let imgs = document.querySelector("#dado_imgs")
 let rolando = document.querySelector("#rolando")
 let BtSortear = document.querySelector("#Btsortear")
 BtSortear.addEventListener("click",ativar)
  function ativar (){

// numero = getRandomInt(1,6)

numero = aleatorio()
    rolando.play()
    imgs.setAttribute("src", "../imgs/"+ numero + ".png")
    console.log("Numero que foi sorteado foi: " + numero)
  }

 function aleatorio(){
    return Math.floor(Math.random() * 6 + 1)
 }
