function calculatePrice(obj){
	let checkboxes = getSelectedCheckboxes();
	let sum = 0;
	for(let i = 0; i < checkboxes.length; i++){
		sum += getPrice(checkboxes[i]);
	}
	document.getElementById('price-total').innerHTML = sum;
}

function getSelectedCheckboxes(){
	let inputs = document.getElementsByTagName('input');
	let checkedInputs = new Array();
	for(var i = 0; i < inputs.length; i++) {
	    if(inputs[i].type == "checkbox" && inputs[i].checked) {
	        checkedInputs.push(inputs[i]);
	    }  
	}
	return checkedInputs;
}

function getPrice(checkbox){
	let sibling = checkbox.parentNode.nextSibling.nextSibling;
	while(!sibling.hasAttribute('class') && sibling.getAttribute('class') != 'price'){
		sibling = sibling.nextSibling.nextSibling;
	}
	let price = +sibling.innerHTML;
	return price;
}