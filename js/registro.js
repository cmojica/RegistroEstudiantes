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
//Funci[on que elimina los registros de la tabla]
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
	$("#btn1").click(function(){
		var id=$("#miCod").val();
		var nombre=$("#miNom").val();
		var apellido=$("#miApe").val();
		var nota=$("#miNota").val();
		var email=$("#miE").val();
		var cedula=$("#miCed").val();
				
		var registro={
			id:id,
			nombre:nombre,
			apellido:apellido,
			nota:nota,
			email:email,
			cedula:cedula
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
});


	





//Esta funcion calcula las notas más altas obtenidas por los alumnos
function calcularnotaAlta(json){
	//Validar para que cuando se haga click al boton no de ningun tipo de resultado
	if(JSONregistro.length===0){
		return false;
	}else{
		//Correor JSON para que de resultado de nota mas alta
		var Nmax = 0;
		for (var i=0;i< JSONregistro.length; i++){
			if (Nmax<JSONregistro[i].Nota){
				Nmax = JSONregistro[i].Nota;																			
			}
		}
		alert("La nota maxima es: "+ Nmax);
	}
}
//Eta función calcula la nota promedio de los alumnos
function calcularPromedio(json){
	if(JSONregistro.length===0){
		return false;
	}else{
		var suma=0.0;			
		for (var i=0; i < JSONregistro.length; i++){
			suma += JSONregistro[i].Nota;
			var prom = suma / JSONregistro.length;		
		}
		alert("La nota promedio es: "+ prom);
	}
}	

//Esta función calcula la nota mas baja de los alumnos
function calcularnotaBaja(json){
	if(JSONregistro.length===0){
		return false;
	}else{
		var Nmin = 100;
		for (var i=0; i<JSONregistro.length; i++){
			if (Nmin>JSONregistro[i].Nota){
				Nmin = JSONregistro[i].Nota;
			}
		}
		alert("La nota minima es: " + Nmin);
	}
}	


