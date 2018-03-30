window.onload = initialize();

function initialize(){
	let listSize = 10;
	let list = document.getElementById('list');
	for(let i = 0; i < listSize; i++){
		createOption(list,i);
	}
	list.selectedIndex = 1;
	list.onchange = function(){processListChange()};
}

function createOption(list, index){
	let option = document.createElement('option');
	if(index == 0)
		option.text = 'Deactivate the button';
	else
		option.text = 'Activate the button';
	option.value = index;
	list.add(option,index);
}

function processListChange(){
	let list = document.getElementById('list');
	let button = document.getElementById('experimental-button');

	if(list.selectedIndex > 0)
		button.disabled = false;
	else
		button.disabled = true;
}