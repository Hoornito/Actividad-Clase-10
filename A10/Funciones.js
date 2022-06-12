var IMC = {
    peso: "imcPeso",
    altura: "imcAltura",
    resultado: "imcResultado",
    mensaje: {
        error: "Formato incorrecto",
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

        if (isNaN(parseInt(peso)) || isNaN(parseInt(altura))) {
            $("#" + IMC.resultado).val(IMC.mensaje.error);
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

    generate_table: function () {

        
        
        
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        document.body.appendChild(tbl);
        // sets the border attribute of tbl to '2'
        tbl.setAttribute("border", "2");
    }

};

$(document).ready(function () {
    IMC.limpiar();
});



