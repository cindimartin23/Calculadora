var Calculadora = {
    init: function(){
        this.formatoTeclas();
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
    minimizaTecla: function(boton){
        var id = boton.id;
        if( id=="1" || 
            id=="2" || 
            id=="3" || 
            id=="0" || 
            id=="igual" || 
            id=="punto" ){
            boton.style.width  = "21%;";
            boton.style.height = "62px;";        
        } else if( id == "mas" ){
            boton.style.width  = "88%;";
            boton.style.height = "98%;"
        } else {
            boton.style.width  = "21%";
            boton.style.height = "62px";
        }
    },
    maximizaTecla: function(boton){
        var id = boton.id;
        if( id=="1" || 
            id=="2" || 
            id=="3" || 
            id=="0" || 
            id=="igual" || 
            id=="punto" ){
			boton.style.width = "29%";
			boton.style.height = "62.91px";
		} else if( id == "mas" ){
			boton.style.width = "90%";
			boton.style.height = "100%";
		} else {
		boton.style.width = "22%";
		boton.style.height = "62.91px";
		}
    }

};

Calculadora.init();
