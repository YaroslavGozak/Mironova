window.onload = function(){
	let dropdowns = document.getElementsByClassName("dropdown");
	setDropdownsDisplay(dropdowns);
	setDropdownsHiding(dropdowns);
}

function showSubMenu(object){
	let dropdown_contents = object.getElementsByClassName("dropdown-content");
	for(let i = 0; i < dropdown_contents.length; i++){
		dropdown_contents[i].style.display = "block";
	}
}

function setDropdownsDisplay(dropdowns){
	for(let i = 0; i < dropdowns.length; i++){
		dropdowns[i].onclick = function(){
			showSubMenu(dropdowns[i]);
		}
	}
}

function setDropdownsHiding(dropdowns){
	for(let i = 0; i < dropdowns.length; i++){
		let dropdown_contents = dropdowns[i].getElementsByClassName("dropdown-content");
		for(let i = 0; i < dropdown_contents.length; i++){
			dropdown_contents[i].onmouseleave = function(){
				dropdown_contents[i].style.display = "none";
			}
		}
	}
}