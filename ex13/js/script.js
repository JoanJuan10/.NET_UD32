$(function () {
    $("#segunda p").click(function (e) { 
        alert("Se presionó un párrafo contenido de la segunda tabla");
    });
    
    $("p").click(function (e) { 
        alert("Se presionó un párrafo del documento");
    });
    
});