var lista = []
var detecor = false
var encontrado=false
var nuclear=0
function setup() {
   canvas = createCanvas(720,1280)
   background("red")
   cocos = ml5.objectDetector("cocossd", cargado)
   baba_za_zvezdara.hide()
   
  
}

function draw() {
   image(baba_za_zvezdara, 0, 0, 720,1280)
   if (detecor) {
      baba_za_zvezdara.size(720,1280)
      cocos.detect(canvas, Respondido)
      encontrado=false
      for (let ovjetos = 0; ovjetos < lista.length; ovjetos++) {
         
         
         noFill()
         stroke("black")
         
         rect(lista[ovjetos].x, lista[ovjetos].y, lista[ovjetos].width, lista[ovjetos].height)
         fill("yellow")
         
         textSize(30)
         strokeWeight(1)
         mensaje = lista[ovjetos].label + Math.round(lista[ovjetos].confidence * 100) + "%"
         text(mensaje, lista[ovjetos].x, lista[ovjetos].y,)
     }
      document.getElementById("h2O").innerHTML = lista.length
   }
}
function cargado() {
   console.log("cargado")
   detecor = true
   baba_za_zvezdara.loop()
   baba_za_zvezdara.volume(0.2)
}
function Respondido(error, resultados) {
   if (!error) {
      console.log(resultados)
      lista = resultados
   }

}
function preload(){
   baba_za_zvezdara=createVideo("baba_za_zvezdara.mp4")
}
