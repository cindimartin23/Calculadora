var Calculadora = {
    visor: document.getElementById("display"),
    numeroEnVisor: "0",
    n1: 0,
    operacion: "",
    n2: 0,
    ultimoValor: 0,
    teclaIgual: false,
    resultado: 0,
        
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
        document.getElementById("punto").addEventListener("click", function() {
            Calculadora.agregaDecimal();
        });
        document.getElementById("sign").addEventListener("click", function() {
            Calculadora.ponerSigno();
        });
        document.getElementById("mas").addEventListener("click", function() {
            Calculadora.ingresoN1yTipoOper("+");
        });
        document.getElementById("menos").addEventListener("click", function() {
            Calculadora.ingresoN1yTipoOper("-");
        });
        document.getElementById("por").addEventListener("click", function() {
            Calculadora.ingresoN1yTipoOper("*");
        });
        document.getElementById("dividido").addEventListener("click", function() {
            Calculadora.ingresoN1yTipoOper("/");
        });
		document.getElementById("raiz").addEventListener("click", function() {
            Calculadora.ingresoN1yTipoOper("raiz");
        });     
        document.getElementById("igual").addEventListener("click", function() {
            Calculadora.mostrarResultado();
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
    /* Funcion para agregar punto decimal */
    agregaDecimal: function(){
        if (this.numeroEnVisor.length < 8 &&            this.numeroEnVisor.indexOf(".")== -1) {
            if (this.numeroEnVisor == ""){
                this.numeroEnVisor = this.numeroEnVisor + "0.";
            } else {
                this.numeroEnVisor = this.numeroEnVisor + ".";
            }
            this.actualizarVisor();
        }
    },
    /* Funcion para poner signo negativo o positivo a un numero */
    ponerSigno: function(){
		if (this.numeroEnVisor !="0") {
			var num;
			if (this.numeroEnVisor.charAt(0)=="-") {
				num = this.numeroEnVisor.slice(1);
			}	else {
				num = "-" + this.numeroEnVisor;
			}
		this.numeroEnVisor = "";
		this.numeroEnVisor = num;
		this.actualizarVisor();
		}
    },
    /* Funcion para capturar primer numero de la operacion y tipo de operacion */
    ingresoN1yTipoOper: function(oper){
		this.n1 = parseFloat(this.numeroEnVisor);
		this.numeroEnVisor = "";
		this.operacion = oper;
		this.teclaIgual = false;
		this.actualizarVisor();
    },
    /* Funcion para ingresar segundo numero de la operacion y realizar el cálculo */
    mostrarResultado: function(){

		if(!this.teclaIgual){ 
			this.n2 = parseFloat(this.numeroEnVisor);
			this.ultimoValor = this.n2;
			this.calculo(this.n1, this.n2, this.operacion);
        } 
        else {
			this.calculo(this.n1, this.ultimoValor, this.operacion);
		}
		this.n1 = this.resultado;
		this.numeroEnVisor = "";
		if (this.resultado.toString().length < 9){
			this.numeroEnVisor = this.resultado.toString();
		} else {
			this.numeroEnVisor = this.resultado.toString().slice(0,8) + "...";
		}
		this.teclaIgual = true;		
		this.actualizarVisor();
    },
    /* Funcion para realizar el calculo correspondiente */
    calculo: function(n1, n2, operacion){
		switch(operacion){
			case "+": 
				this.resultado = eval(n1 + n2);
			break;
			case "-": 
				this.resultado = eval(n1 - n2);
			break;
			case "*": 
				this.resultado = eval(n1 * n2);
			break;
			case "/": 
				this.resultado = eval(n1 / n2);
			break;
			case "raiz":
				this.resultado = eval(Math.sqrt(n1));
		}
	}
};

Calculadora.init();
