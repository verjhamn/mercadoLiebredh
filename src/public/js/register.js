$(document).ready(function () {
    console.log("ready!")

    $("#btn-enviar").on("click", function (event) {
        location.href ='/home';
    })

    $("#btn-borrar").on("click", function (event) {
        $("#datosRegistro")[0].reset()
    })

})



