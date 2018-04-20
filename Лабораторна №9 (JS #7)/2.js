document.onload = initialize();

$(".chart-column").onmouseleave = hideAlt;

function initialize(){
	styleColumns();
	let chart_columns = $(".post"); 
	console.log(chart_columns);
	for(let i = 0; i < chart_columns; i++){
		chart_columns[i].onmouseover = function(e){
			console.log("ENTERED");
			displayAlt(e.target, e);
		};
	}
}

function styleColumns(){
	$("#fagamesChart .post").css("backgroundColor","orange").css("minHeight","2px");
	$("#gscChart .post").css("backgroundColor","red").css("minHeight","2px");
	$("#vgamesChart .post").css("backgroundColor","blue").css("minHeight","2px");
	$("#ubisoftChart .post").css("backgroundColor","navy").css("minHeight","2px");
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
		company_prices_relative[i] = calculatePercentage(company_prices[i], max_price) * 6.2;
	}

	$("#fagamesChart .post").animate({height: company_prices_relative[0] + "px"});
	$("#gscChart .post").animate({height: company_prices_relative[1] + "px"});
	$("#vgamesChart .post").animate({height: company_prices_relative[2] + "px"});
	$("#ubisoftChart .post").animate({height: company_prices_relative[3] + "px"});

	$("#fagamesChart .alt")[0].innerText = form.fagames.value;
	$("#gscChart .alt")[0].innerText = form.gsc.value;
	$("#vgamesChart .alt")[0].innerText = form.vgames.value;
	$("#ubisoftChart .alt")[0].innerText = form.ubisoft.value;

	console.log($("#fagamesChart .alt")[0].innerText);
	console.log($("#gscChart .alt").val());
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
	if(max_value == 0)
		return 0;
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