
//Funcion que edita los registros de la tabla 
function editarRegistro(id){
	for(var i=0; i < localStorage.length; i++){
		var clave=localStorage.key(i);
		if(clave==id){
			registro=$.parseJSON(localStorage.getItem(clave));
					
			$("#miCod").val(registro.id);
			$("#miNom").val(registro.nombre);
			$("#miApe").val(registro.apellido);
			$("#miNota").val(registro.nota);
			$("#miE").val(registro.email);
			$("#miCed").val(registro.cedula);
		}
	}
}
//Funcion que elimina los registros de la tabla]
function eliminarRegistro(id){
	localStorage.removeItem(id);
	//Mostrar Tabla
	listarEstudiantes();
}	

//Funcion para mostrar los estudiantes registrados en una tabla
function listarEstudiantes(){
	var tabla="";
	var parrafo1=$("#p1");
			
	tabla+='<table id="tabla">';
	tabla+='<tr>';
	tabla+='<th>ID</th>';
	tabla+='<th>NOMBRE</th>';
	tabla+='<th>APELLIDO</th>';
	tabla+='<th>NOTA</th>';
	tabla+='<th>EMAIL</th>';
	tabla+='<th>CEDULA</th>';
	tabla+='<th>EDITAR</th>';
	tabla+='<th>ELIMINAR</th>';
	tabla+='</tr>';
			
	for(var i=0;i<localStorage.length;i++){
		var clave=localStorage.key(i);
		var registro=$.parseJSON(localStorage.getItem(clave));
				
		tabla+='<tr>';
		tabla+='<td id="td1">'+registro.id+'</td>';
		tabla+='<td>'+registro.nombre+'</td>';
		tabla+='<td>'+registro.apellido+'</td>';
		tabla+='<td>'+registro.nota+'</td>';
		tabla+='<td>'+registro.email+'</td>';
		tabla+='<td id="td6">'+registro.cedula+'</td>';
		tabla+='<td><button id="btnR" onclick="editarRegistro(\''+registro.id+'\');">Editar</button></td>';
		tabla+='<td><button id="btnE" onclick="eliminarRegistro(\''+registro.id+'\');">Eliminar</button></td>';
		tabla+='</tr>';				
	}
		tabla+='</table>';
		$(parrafo1).html(tabla);
	}


//Jquery
$(document).ready(function(){		

	$("#miNom,#miApe,#miNota,#miE,#miCed").focus(function(){
		$(this).css("background-color","#EEF4B7");		
	});
	
	//Ver tabla de Estudiantes
	listarEstudiantes();
	//Crear un id automatico
	var contador;
	if(localStorage.length>0){
		contador=localStorage.length+1;
	}else{
		contador=1;
	}
	$("#miCod").val(contador);
			
	//Funcion para registrar estudiantes
	$(".submit").click(function(){
		var id=$("#miCod").val();
		var nombre=$("#miNom").val();
		var apellido=$("#miApe").val();
		var nota=$("#miNota").val();
		var email=$("#miE").val();
		var cedula=$("#miCed").val();
		
				
		if((nombre,apellido,nota,email,cedula).length===0){
			return;
		
		}else{		
		var registro={
			id:id,
			nombre:nombre,
			apellido:apellido,
			nota:nota,
			email:email,
			cedula:cedula
			}
		}
		
		localStorage.setItem(id, JSON.stringify(registro));
		contador=localStorage.length+1;
		listarEstudiantes();
		alert("!!Alumno Registrado!!");
		restablecer();		
	});
	//funcion que limpia la pantalla		
	function restablecer(){
		$("#miCod").val(contador);
		$("#miNom").val("");
		$("#miApe").val("");
		$("#miNota").val("");
		$("#miE").val("");
		$("#miCed").val("");		
	}
	//Esta función calcula la nota promedio de los alumnos
	$("#btn2").click(function(){
		//Validar para que cuando se haga click al boton no de ningun tipo de resultado
		if(localStorage.length===0){
		return false;
	}else{
		//Correr LocalStorage para que de resultado de nota mas alta
		var suma=0.0;			
		for (var i=0; i < localStorage.length; i++){
			var clave=localStorage.key(i);
			var registro=$.parseJSON(localStorage.getItem(clave));	
			suma += parseInt(registro.nota);
			var prom = suma/localStorage.length ;		
		}
		alert("La nota promedio es: "+ prom.toFixed(2));
	}
	});	
	//Esta funcion calcula las notas más altas obtenidas por los alumnos
	$("#btn3").click(function(){
		
		//Validar para que cuando se haga click al boton no de ningun tipo de resultado
		if(localStorage.length===0){
			return false;
		}else{
			//Correr LocalStorage para que de resultado de nota mas alta
			var Nmax = 0;
			for (var i=0;i<localStorage.length; i++){
				var clave=localStorage.key(i);
				var registro=$.parseJSON(localStorage.getItem(clave));				
				if (Nmax<registro.nota){
					Nmax = parseInt(registro.nota);																			
				}
			}
			alert("La nota maxima es: "+ Nmax);
		}
	});
	//Esta función calcula la nota mas baja de los alumnos
	$("#btn4").click(function(){
		if(localStorage.length===0){
		return false;
	}else{
		var Nmin = 100;
		for (var i=0; i<localStorage.length; i++){
			var clave=localStorage.key(i);
			var registro=$.parseJSON(localStorage.getItem(clave));
			if (Nmin>registro.nota){
				Nmin = parseInt(registro.nota);
			}
		}
		alert("La nota minima es: " + Nmin);
	}
	});	
});