function checkForm(form){
	let validForm = true;
	if(!isValidName(form.fname.value)){
		form.fnameIncorrect.value = "Неправильное имя";
		validForm = false;
	}
	else{
		form.fnameIncorrect.value = "";
	}
	if(!isValidName(form.lname.value)){
		form.lnameIncorrect.value = "Неправильная фамилия";
		validForm = false;
	}
	else{
		form.lnameIncorrect.value = "";
	}
	if(!isValidPostIndex(form.index.value)){
		form.indexIncorrect.value = "Неправильный индекс";
		validForm = false;
	}
	else{
		form.indexIncorrect.value = "";
	}
	if(!isValidEmail(form.email.value)){
		form.emailIncorrect.value = "Неправильная эл. почта";
		validForm = false;
	}
	else{
		form.emailIncorrect.value = "";
	}
	if(validForm)
		alert("Отправлено!");
}

function isValidName(name){
	console.log(name);
	if(name.length == 0)
		return false;
	for(let i = 0; i < name.length; i++){
		if(name.charCodeAt(i) >= 46 & name.charCodeAt(i) <= 57){
			console.log("Bad name")
			return false;
		}
	}
	console.log("good name")
	return true;
}

function isValidPostIndex(index){
	console.log(index);
	if(index.length != 5){
		console.log("Bad index")
		return false;
	}
	for(let i = 0; i < index.length; i++){
		if(index.charCodeAt(i) < 46 || index.charCodeAt(i) > 57){
			console.log("Bad index")
			return false;
		}
	}
	console.log("Good index")
	return true;
}

function isValidEmail(email){
	console.log(email);
	if(email.indexOf("@")== -1 || email.indexOf("@") == 0)
		return false; 
	if(email.indexOf("@") != email.lastIndexOf("@"))
		return false;
	if(email.charAt(email.length -1) == "@")
		return false;
	if(email.charAt(email.length - 1) == "." || email.charAt(0) == ".")
		return false;
	if(email.charAt(email.indexOf("@") + 1) == "."|| (email.charAt(email.indexOf("@") - 1) == "."))
		return false;
	if(email.lastIndexOf(".") < email.indexOf("@"))
		return false;
	console.log("Good email")
	return true;
}