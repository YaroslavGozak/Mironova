window.onload = initialize();

function initialize(){
	let groupList = document.getElementById('group-list');
	createOptionsForGroupList(groupList)
	groupList.onchange = function(){populateStudentList()};

	document.getElementById('student-list').disabled = true;;
}

function createOptionsForGroupList(list){
	for(let i = 0; i < 5; i++){
		let option = document.createElement('option');
		option.value = i;
		list.add(option,i);
	}
	list.options[0].text = 'I-31';
	list.options[1].text = 'I-32';
	list.options[2].text = 'KN-31';
	list.options[3].text = 'KN-31';
	list.options[4].text = 'PI-31';
}

function populateStudentList(){
	let studentList = document.getElementById('student-list');
	studentList.disabled = false;
	createOptionsForStudentList(studentList)
	studentList.onchange = function(){showResult()};
}

function createOptionsForStudentList(list){
	clearListFromIndex(list,0);
	for(let i = 0; i < 5; i++){
		let option = document.createElement('option');
		option.value = i;
		list.add(option,i);
	}

	let index = document.getElementById('group-list').selectedIndex;
	switch (index){
		case 0:
			list.options[0].text = 'Perederiy Nikita';
			list.options[1].text = 'Kovalchuk Max';
			list.options[2].text = 'Petruha Ivan';
			list.options[3].text = 'Mokricky Nax';
			list.options[4].text = 'Smishenko Dima';
		break;
		case 1:
			list.options[0].text = 'Polischuk Dasha';
			list.options[1].text = 'Dehtareva Yuli';
			list.options[2].text = 'Prasol Katia';
			list.options[3].text = 'Podopryhina Anastasia';
			list.options[4].text = 'Elfimova Maria';
		break;
		case 2:
			list.options[0].text = 'Pleshach Valentina';
			list.options[1].text = 'Duhnovskaya Ksenia';
			list.options[2].text = 'Steshenko Grigory';
			list.options[3].text = 'Pirog Mikola';
			list.options[4].text = 'Mironova Viktoria';
		break;
		case 3:
			list.options[0].text = 'Ivan Ivanovich';
			list.options[1].text = 'Sergey Suharenko';
			list.options[2].text = 'Ksenia Sokol';
			list.options[3].text = 'Goricky Max';
			list.options[4].text = 'Nakahava Daniil';
		break;
		case 4:
			list.options[0].text = 'This group hasn\'t been created yet' ;
			list.options[0].value = 'error' ;
			clearListFromIndex(list,1)
		break;
		default:
			list.options[0].text = 'Sorry. Something went wrong';
			list.options[0].value = 'error' ;
			clearListFromIndex(list,1)
		break;
	}
}

function clearListFromIndex(list, index){
	for(let i = list.options.length; i >= index; i-- ){
		list.remove(i);
	}
}

function showResult(){
	let groupList = document.getElementById('group-list');
	let studentList = document.getElementById('student-list');

	let group = groupList[groupList.selectedIndex].text;
	let student = studentList[studentList.selectedIndex].text;

	alert("You selected " + group + " - " + student);
}