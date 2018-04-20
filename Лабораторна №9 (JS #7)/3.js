$(".dropdown").on("click", function(){
	let menu = $(".dropdown-content", this);
	if(menu.css("display") == "none")
		menu.show("fast");
	else
		menu.hide("fast");
});


$(".dropdown-content").on("mouseleave", function(){
	let menu = $(".dropdown-content", this);
	$(this).hide("fast");
});