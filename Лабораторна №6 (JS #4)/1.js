window.onload = initializeImage();

function initializeImage(){
	let image = document.getElementById("custom_img");
	image.style.height = "100px";
	image.style.width = "100px";
	image.style.border = "5px solid grey";
	image.style.borderRadius = "3px";
	image.style.borderWidth = "5px";
	image.alt = "Alt text";
	image.visibility = "visible";
}

function renderImage(form){
	let image = document.getElementById("custom_img");

	if(form.width){
		image.style.width = form.width.value + "px";
	}

	if(form.height){
		image.style.height = form.height.value + "px";
	}

	if(form.borderWeight){
		image.style.borderWidth = form.borderWeight.value + "px";
	}

	if(form.borderColor){
		console.log(form.borderColor);
		image.style.borderColor = form.borderColor.value;
	}

	if(form.borderRadius){
		image.style.borderRadius = form.borderRadius.value + "px";
	}	

	if(form.background){
		image.style.backgroundColor = form.background.value;
	}
}