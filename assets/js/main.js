function validacion(){
	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail").value;
	var address = document.getElementById("address").value;
	var subs = document.getElementById("suscribirse");

	if(name == ""){
 		alert("Ingrese su Nombre");
 	}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(mail))){
 		alert("Ingrese su Email, correctamente");
 	}else if(address == ""){
 		alert("Ingrese su Dirección, correctamente");
 	}else if(!document.getElementById("select-te").value){
		alert("Elige tu set de té");
	}else{
		document.getElementById("name").value ="";
		document.getElementById("mail").value = "";
		document.getElementById("address").value = "";
		document.getElementById("select-te").value = "";	
		alert("Muchas gracias por suscribirte");		
	}	
};