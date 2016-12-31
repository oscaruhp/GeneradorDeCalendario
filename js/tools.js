//Creación de funcionalidad de selección
jQuery.fn.selectText = function(){
   var doc = document;
   var element = this[0];
   console.log(this, element);
   if (doc.body.createTextRange) {
       var range = document.body.createTextRange();
       range.moveToElementText(element);
       range.select();
   } else if (window.getSelection) {
       var selection = window.getSelection();        
       var range = document.createRange();
       range.selectNodeContents(element);
       selection.removeAllRanges();
       selection.addRange(range);
   }
};
// función de redimensión
function RedimensionarImagen(base64, maxWidth, maxHeight) {
  if(typeof(maxWidth) === 'undefined') var maxWidth = 500;
  if(typeof(maxHeight) === 'undefined') var maxHeight = 500;
  var canvas = document.createElement("canvas");
  var ContextoCanvas = canvas.getContext("2d");
  var CopiaCambas = document.createElement("canvas");
  var copyContext = CopiaCambas.getContext("2d");
  var ImgenTemporal = new Image();
  ImgenTemporal.src = base64;
  var ratio = 1;
  if(ImgenTemporal.width > maxWidth)
    ratio = maxWidth / ImgenTemporal.width;
  else if(ImgenTemporal.height > maxHeight)
    ratio = maxHeight / ImgenTemporal.height;
  CopiaCambas.width = ImgenTemporal.width;
  CopiaCambas.height = ImgenTemporal.height;
  copyContext.drawImage(ImgenTemporal, 0, 0);
  canvas.width = ImgenTemporal.width * ratio;
  canvas.height = ImgenTemporal.height * ratio;
  ContextoCanvas.drawImage(CopiaCambas, 0, 0, CopiaCambas.width, CopiaCambas.height, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL();
} 
// Funciones de cambio de fondo y color
function CambiarColorFondo(Color){
          $(".month_name").css("background-color",Color);
     } 
function CambiarColor(Color){
          $(".month_name").css("color",Color);
     } 
// array de frases
var Frases=["Un nuevo año es el nuevo comienzo y mil momentos que festejar, que se cristalice cada noble afán de tu corazón!",
"Aunque hayamos perdido una ilusión, nuevas vendrán a anidar nuestro corazón. Feliz Año Nuevo 2017!",
"Si el año 2016 te trajo felicidad, que el año 2017 te traiga la mayor de las alegrías... Que tengas un feliz Año!",
"No podemos olvidar los errores, pero de cada lección nos llenamos de sabiduría. Que la felicidad te aguarde en este año que comienza!",
"Si tuvieras solo un deseo por cumplir cuál sería?, Que Dios cumpla cada uno de los buenos deseos de tu corazón en el año nuevo!",
"Doce meses, cuatro estaciones, un corazón alegre y unos ojos soñadores... Feliz Año Nuevo 2017!",
"Por cada día del nuevo año, un nuevo anhelo por el que luchar y esmerarse... Bendiciones en tus nuevos proyectos!",
"Que este Año Nuevo 2017 te permita dilucidar lo mejor para tu vida y la de los tuyos, valorando siempre a los que más te quieren, pues sin ellos nada sería igual!. Éxitos y bendiciones para este Nuevo Año!",
"Si el año que está por concluir dejó en ti recuerdos de dolor, que este Año Nuevo se impregnen los mejores instantes de tu vida por cada sueño alcanzado! Feliz Año 2017!",
"Te deseo el mejor de los años, que el Amor, la fe, la generosidad y la salud te permitan lograr lo que más anhelas. Felicidades en el Año que está por comenzar!",
"A pesar de los quebranto siempre surgirá la ilusión, sin importar las adversidades, siempre se impondrá el Amor, que Dios te colme de alegrías en este año que inicia!",
"Navidad y Año Nuevo, sin duda los mejores momentos recuerdos de nuestra vida. Que cada día del Año Nuevo sea un motivo para sonreír... Un muy feliz Nuevo Año 2017!"];

    
$( document ).ready(function() {
$("#btnFrase").click(function() {
    $("#Frase").selectText();
});
$('#btnImagen').change(function(){
    if(this.files && this.files[0]){
        var Archivo= new FileReader();
        Archivo.onload=function(e){
            $('#img').attr('src',RedimensionarImagen(e.target.result,400));
        };
        Archivo.readAsDataURL(this.files[0]);
    }
});
$('#btnColorLetra').change(function(){
CambiarColor(this.value);
});
$('#btnColorFondo').change(function(){
CambiarColorFondo(this.value);
});
var rand = Frases[Math.floor(Math.random() * Frases.length)];  
 $('#Frase').html(rand);
});
