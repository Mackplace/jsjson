
var songs= [];


$(document).ready(function(json){
    $.getJSON("https://raw.githubusercontent.com/Mackplace/jsjson/gh-pages/playlist.json", function(json) {

        $.each( json, function(i, llave ) {
            $.each( llave, function( j, lala ) {
                songs.push(lala);
            });
        });
        actualizacion();
        // this will show the info it in firebug console
    });
});

function actualizacion()
{

    // Obtiene la plantilla
    var fuentePlantilla = $("#tablaCanciones").html();

    // Compila la plantilla
    var plantilla = Handlebars.compile( fuentePlantilla );

    // Pasa los datos a la plantilla
    var html = plantilla( songs );

    // Agrega el resultado a la página
    $('#tablaSongs').html( html );

}


