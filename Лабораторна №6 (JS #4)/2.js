document.onload = initialize();

document.getElementsByClassName("chart-column").onmouseleave = hideAlt;

function initialize(){
	styleColumns();
	let chart_columns = document.getElementsByClassName("chart-column"); 
	console.log(chart_columns);
	for(let i = 0; i < chart_columns; i++){
		chart_columns[i].onmouseover = function(e){
			console.log("ENTERED");
			displayAlt(e.target, e);
		};
	}
}

function styleColumns(){

	document.getElementById("fagamesChart").getElementsByClassName("post")[0].style.backgroundColor = "orange";
	document.getElementById("gscChart").getElementsByClassName("post")[0].style.backgroundColor = "red";
	document.getElementById("vgamesChart").getElementsByClassName("post")[0].style.backgroundColor = "blue";
	document.getElementById("ubisoftChart").getElementsByClassName("post")[0].style.backgroundColor = "navy";

	document.getElementById("fagamesChart").getElementsByClassName("post")[0].style.minHeight = "2px";
	document.getElementById("gscChart").getElementsByClassName("post")[0].style.minHeight = "2px";
	document.getElementById("vgamesChart").getElementsByClassName("post")[0].style.minHeight = "2px";
	document.getElementById("ubisoftChart").getElementsByClassName("post")[0].style.minHeight = "2px";
}

function renderChart(form){
	let fagames = form.fagames.value;
	let gsc = form.gsc.value;
	let vgames = form.vgames.value;
	let ubisoft = form.ubisoft.value;

	console.log(form.fagames.value);
	console.log(fagames);

	let company_prices = new Array(new Number(fagames), new Number(gsc), new Number(vgames), new Number(ubisoft));
	let company_prices_relative = new Array(4);
	console.log(company_prices);
	let max_price = findMax(company_prices);
	console.log(max_price);
	for(let i = 0; i < company_prices.length; i++){
		company_prices_relative[i] = calculatePercentage(company_prices[i], max_price);
	}

	console.log(company_prices);

	document.getElementById("fagamesChart").getElementsByClassName("post")[0].style.height = company_prices_relative[0] + "px";
	document.getElementById("gscChart").getElementsByClassName("post")[0].style.height = company_prices_relative[1] + "px";
	document.getElementById("vgamesChart").getElementsByClassName("post")[0].style.height = company_prices_relative[2] + "px";
	document.getElementById("ubisoftChart").getElementsByClassName("post")[0].style.height = company_prices_relative[3] + "px";

	document.getElementById("fagamesChart").getElementsByClassName("alt")[0].innerHTML = company_prices[0];
	document.getElementById("gscChart").getElementsByClassName("alt")[0].innerHTML = company_prices[1];
	document.getElementById("vgamesChart").getElementsByClassName("alt")[0].innerHTML = company_prices[2];
	document.getElementById("ubisoftChart").getElementsByClassName("alt")[0].innerHTML = company_prices[3];
}

function findMax(values){
	let max = values[0];
	for(let i = 1; i < values.length; i++){
		if(max < values[i])
			max = values[i];
	}
	return max;
}

function calculatePercentage(value, max_value){
	return value / max_value * 100;
}

function displayAlt(e){
	e.target.parentElement.childNodes[1].style.visibility = "visible";
}

function hideAlt(e){
	document.getElementById("custom_menu").style.visibility = "hidden";
	e.target.parentElement.childNodes[1].style.visibility = "hidden";
}

function rerenderAlt(e){
	displayAlt(e);
}