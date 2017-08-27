
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
			
	tabla+='<table border="1">';
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
		tabla+='<td>'+registro.id+'</td>';
		tabla+='<td>'+registro.nombre+'</td>';
		tabla+='<td>'+registro.apellido+'</td>';
		tabla+='<td>'+registro.nota+'</td>';
		tabla+='<td>'+registro.email+'</td>';
		tabla+='<td>'+registro.cedula+'</td>';
		tabla+='<td><button onclick="editarRegistro(\''+registro.id+'\');">Editar</button></td>';
		tabla+='<td><button onclick="eliminarRegistro(\''+registro.id+'\');">Eliminar</button></td>';
		tabla+='</tr>';				
	}
		tabla+='</table>';
		$(parrafo1).html(tabla);
	}	
//Jquery
$(document).ready(function(){
<<<<<<< HEAD
	
	$.validator.setDefaults({
		submitHandler: function() {
			alert("submitted!");
		}
	});
	
	// validate signup form on keyup and submit
	$("#miForm").validate({
		rules: {
			miNom: "required",
			miApe: "required",
			miNota: {
				required: true,
				minlength: 2
			},
			miE: {
				required: true,
				minlength: 5
			},
			miCed: {
				required: true,
				email: true
			},
			errorElement:"span",
			messages: {
				miNom: {
					required: "Porfavor ingrese su nombre",
					minlength: "Ingrese como minimo 3 caracteres"
				},
				miApe: "Porfavor ingrese su apellido",
				miNota: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				miE: {
					required: "Please provide a password",
				},
				miCed: {
					required: "Please provide a password",
					minlength: "Your password must be at least 5 characters long",
					equalTo: "Please enter the same password as above"
				},
			}
		}
	});

=======
	$.validator.setDefaults({
		submitHandler: function() {
			alert("Enviado");
		}
	});
	// validate signup form on keyup and submit
		$("#miForm").validate({
			rules: {
				miNom:{
					required:"Este campo es requerido"},
				miApe: "required",
				miE: {
					required: true,
					email: true
				},
				miNota: {
					required: "Obligatorio agregar una nota",
				},
				MiCed: "required"
			},
			messages: {
				miNom: "Porfavor escriba un nombre",
				miApe: "Porfavor escriba un apellido",
				miE: "Ingrese un email valido",
				miNota: "Ingrese una nota",
				MiCed: "Ingrese la cedula"
			}
		});
	
>>>>>>> e6b8d13a6cb570c6d03cbb3dc9ac161a34fcd9f9
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
<<<<<<< HEAD
		if((nombre,apellido,nota,email,cedula).length===0){
			return false;
		}else{		
=======
		
		if((nombre,apellido,nota,email,cedula).length===0){
			return false;
			}else{
				
>>>>>>> e6b8d13a6cb570c6d03cbb3dc9ac161a34fcd9f9
		var registro={
			id:id,
			nombre:nombre,
			apellido:apellido,
			nota:nota,
			email:email,
<<<<<<< HEAD
			cedula:cedula
			}
=======
			cedula:cedula		
		}
>>>>>>> e6b8d13a6cb570c6d03cbb3dc9ac161a34fcd9f9
		};
		localStorage.setItem(id, JSON.stringify(registro));
		contador=localStorage.length+1;
				
		listarEstudiantes();
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