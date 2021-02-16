$(function () {

    setInterval(function () {
        var hora = new Date();
        var tiempo = "";
        if (hora.getHours() < 10) {
            tiempo += "0" + hora.getHours() + " : ";
        }
        else {
            tiempo += hora.getHours()  + " : ";
        }
        if (hora.getMinutes() < 10) {
            tiempo += "0" + hora.getMinutes()  + " : ";
        }
        else {
            tiempo += hora.getMinutes()  + " : ";
        }
        if (hora.getSeconds() < 10) {
            tiempo += "0" + hora.getSeconds();
        }
        else {
            tiempo += hora.getSeconds();
        }

        $("#reloj").val(tiempo);
    }, 1000);
    
});