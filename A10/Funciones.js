var IMC = {
    peso: "imcPeso",
    altura: "imcAltura",
    resultado: "imcResultado",
    mensaje: {
        error: "Formato incorrecto",
        errorPeso: "Peso maximo o minimo superado.",
        errorAltura: "Altura maxima o minima superada.",
    },

    limpiar: function () {
        $('#' + this.peso).val("");
        $('#' + this.altura).val("");
        $('#' + this.resultado).val("");
        $('#' + this.peso).focus();
        this.limpiotabla();
    },

    limpiotabla: function () {
        $('#Tab').addClass("hidden");
        $('#inferior').addClass('hidden');
        $('#normal').addClass('hidden');
        $('#superior').addClass('hidden');
        $('#Obesidad').addClass('hidden');
    },

    calcular: function () {
        var peso = $("#" + IMC.peso).val();
        var altura = $("#" + IMC.altura).val();
        var resultado = "";

        if (isNaN(parseInt(peso)) || isNaN(parseInt(altura)) || parseInt(peso) == 0 || parseInt(altura) == 0) {
            $("#" + IMC.resultado).val(IMC.mensaje.error);
        }
        else if(parseInt(peso) > 544 || parseInt(peso) < 2 ){
            $("#" + IMC.resultado).val(IMC.mensaje.errorPeso);
        }
        else if(parseInt(altura) > 272 || parseInt(altura) < 10){
            $("#" + IMC.resultado).val(IMC.mensaje.errorAltura);
        }
        else {
            var imc = peso / (altura / 100 * altura / 100);
            if (imc < 18.5) {
                this.limpiotabla();
                document.getElementById("Tab").classList.remove("hidden");
                document.getElementById("inferior").classList.remove("hidden");
            } 
            else if (imc >= 18.5 && imc <= 24.9) {
                this.limpiotabla();
                document.getElementById("Tab").classList.remove("hidden");
                document.getElementById("normal").classList.remove("hidden");
            } 
            else if (imc >= 25 && imc <= 29.9) {
                this.limpiotabla();
                document.getElementById("Tab").classList.remove("hidden");
                document.getElementById("superior").classList.remove("hidden");
            } 
            else if (imc >= 30) {
                this.limpiotabla();
                document.getElementById("Tab").classList.remove("hidden");
                document.getElementById("Obesidad").classList.remove("hidden");
            }
            $("#" + IMC.resultado).val(imc);
        }
    },
};

$(document).ready(function () {
    IMC.limpiar();
});



