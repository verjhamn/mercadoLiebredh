$(document).ready(function () {
    console.log("ready!")

    $("#btn-borrar").on("click", function (event) {
        $("#datosRegistro")[0].reset()
    })

    $("#btn-modal").on("click", function (event) {
        location.href = '/home'
    })

})



