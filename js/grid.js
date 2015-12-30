$(document).ready(function(){

	var rows = 20;
	var columns = 20;
	var height = 960 / rows;
	var width = 960 / columns;

	$("button[name='clear']").on("click", function(){
		$(".container").find(".gridcell").remove();
		$(".container").find(".gridrow").remove();

		rows = prompt("Please enter the amount of rows", 20);
		height = 960 / rows;

		columns = prompt("Please enter the amount of columns", 20);
		width = 960 / columns;

		for (var i = 0; i < rows; i++) {
			$(".container").append("<div class=gridrow id=gridrow" + i + "></div>");
			for (var j = 0; j < columns; j++) {
				$(".container").find("#gridrow"+i).append("<div class=gridcell></div>");
			};
		};

		$(".gridcell").css("width", width);
		$(".gridcell").css("height", height);
		$(".gridrow").css("height", height);

		$(".gridcell").mouseenter(function(){
			$(this).addClass("highlight");
		});
	});



	function calcRows() {
		rows = prompt("Please enter the amount of rows", 20);
		height = 960 / rows;
	}

	function calcColumns() {
		columns = prompt("Please enter the amount of columns", 20);
		width = 960 / columns;
	}

});