var Calculadora = {
    visor: document.getElementById("display"),
    numeroEnVisor: "0",
    operacion: "",
    
    init: function(){
        this.formatoTeclas();
        this.asignarEventos();
    },

    // Formato de botones cuando se presiona y suelta una tecla
    formatoTeclas: function(){
        var tecla = document.querySelectorAll(".tecla");
        for(var i = 0; i < tecla.length; i++){
            tecla[i].onclick  = this.minimizaTeclaEvento;
            tecla[i].onmousemove = this.maximizaTeclaEvento;
        };
    },
    minimizaTeclaEvento: function(event){
		Calculadora.minimizaTecla(event.target);
	},

	maximizaTeclaEvento: function(event){
		Calculadora.maximizaTecla(event.target);
    },
    /* Para achicar la tecla */ 
    minimizaTecla: function(boton){
        var idBoton = boton.id;
        if( idBoton == "1" || 
            idBoton == "2" || 
            idBoton == "3" || 
            idBoton == "0" || 
            idBoton == "igual" || 
            idBoton == "punto" ) {
                boton.style.width  = "28%";
                boton.style.height = "62px";      
        } else if( idBoton == "mas" ) {
            boton.style.width  = "88%";
            boton.style.height = "98%"
        } else {
            boton.style.width  = "21%";
            boton.style.height = "62px";
        }
    },
    /* Para agrandar la tecla */
    maximizaTecla: function(boton) {
        var idBoton = boton.id;
        if( idBoton == "1" || 
            idBoton == "2" || 
            idBoton == "3" || 
            idBoton == "0" || 
            idBoton == "igual" || 
            idBoton == "punto" ) {
			    boton.style.width = "29%";
			    boton.style.height = "62.91px";
		} else if( idBoton == "mas" ) {
			boton.style.width = "90%";
			boton.style.height = "100%";
		} else {
		boton.style.width = "22%";
		boton.style.height = "62.91px";
		}
    },
    asignarEventos: function(){
		document.getElementById("0").addEventListener("click", function() {
            Calculadora.ingresarNumero("0");
        });
		document.getElementById("1").addEventListener("click", function() {
            Calculadora.ingresarNumero("1");
        });
		document.getElementById("2").addEventListener("click", function() {
            Calculadora.ingresarNumero("2");
        });
		document.getElementById("3").addEventListener("click", function() {
            Calculadora.ingresarNumero("3");
        });
		document.getElementById("4").addEventListener("click", function() {
            Calculadora.ingresarNumero("4");
        });
		document.getElementById("5").addEventListener("click", function() {
            Calculadora.ingresarNumero("5");
        });
		document.getElementById("6").addEventListener("click", function() {
            Calculadora.ingresarNumero("6");
        });
		document.getElementById("7").addEventListener("click", function() {
            Calculadora.ingresarNumero("7");
        });
		document.getElementById("8").addEventListener("click", function() {
            Calculadora.ingresarNumero("8");
        });
		document.getElementById("9").addEventListener("click", function() {
            Calculadora.ingresarNumero("9");
        });
        document.getElementById("on").addEventListener("click", function() {
            Calculadora.limpiarVisor();
        });
    },
    /* Funcion para leer el numero presionado */ 
    ingresarNumero: function(numero){
		if (this.numeroEnVisor.length < 8) {
		
			if (this.numeroEnVisor == "0") {
				this.numeroEnVisor = "";
				this.numeroEnVisor = this.numeroEnVisor + numero;
			} else {
				this.numeroEnVisor = this.numeroEnVisor + numero;
			}
		this.actualizarVisor();
		}
    },
    /* Funcion para refrescar los datos en la pantalla */ 
    actualizarVisor: function(){
		this.visor.innerHTML = this.numeroEnVisor;
    },
    /* Funcion para limpiar la pantalla de la Calculadora */
    limpiarVisor: function(){ 
	    this.numeroEnVisor = "0";
		this.operacion = "";
		this.actualizarVisor();
	},

};

Calculadora.init();
