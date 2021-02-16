function validarFechaNacimiento(fecha) {
    let validacion = /(.)*[0-9]{2}\/[0-9]{2}\/[0-9]{4}(.)*/g;
    (validacion.test(fecha)) ? alert(true) : alert(false);
}
function validarCorreo(correo) {
    let validacion = /([A-z0-9-.])+@([A-z0-9])+\.([A-z]){2,3}/g;
    (validacion.test(correo)) ? alert(true) : alert(false);
}
function escapeHTML(text) {
    var replacements = [[/(.)*&(.)*/g, "&amp;"], [/(.)*\"(.)*/g, "&quot;"],
                        [/(.)*<(.)*/g, "&lt;"], [/(.)*>(.)*/g, "&gt;"]];
    forEach(replacements, function (replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
function ordenNombre(nombre) {
    let validacion = /([A-z])+ ([A-z])+/g;
    if (validacion.test(nombre)) {
        let nombres = nombre.split(" ");
        return nombres[1] + ", " + nombres[0];
    }
}
function removeScripts (html) {
    let validacion = /(<script>(.)*<\/script>)/gm;
    while (validacion.test(html)) {
        html = html.replace(validacion, "");
    } 
}

$(function () {
    validarFechaNacimiento("Nací el 04/03/2000 en Segóvia.");
    validarCorreo("dfb35uais-.ch1soa@gmail.com");
});