slider2Int = 1;
slider2Next = 2;

$(document).ready(function(e) {
	$('#slider2 > img#1').fadeIn(300);
	start2Slider();
});

function start2Slider() {
	c2ount = $('#slider2 > img').size();
	
	l2oop = setInterval(function() {
		
		if(slider2Next > c2ount) {
	 		slider2Next = 1;
	 		slider2Int = 1;
		}
		
		$('#slider2 > img').fadeOut(300);
		$('#slider2 > img#' + slider2Next).fadeIn(300);
		
		slider2Int = slider2Next;
		slider2Next = slider2Next + 1;

	}, 3000)
	
}

function p2rev() {
	new2Slide = slider2Int - 1;
	show2Slide(new2Slide);
}

function n2ext() {
	new2Slide = slider2Int + 1;
	show2Slide(new2Slide);
}

function stop2Loop() {
	window.clearInterval(l2oop);
}

function show2Slide(id) {
	stop2Loop();
	if(id > c2ount) {
	 	id = 1;
	}else if(id < 1) {
		id = c2ount;
	}
		
	$('#slider2 > img').fadeOut(300);
	$('#slider2 > img#' + id).fadeIn(300);
		
	slider2Int = id;
	slider2Next = id + 1;
	start2Slider();
}

$("#slider2 > img").hover(
	function () {
		stop2Loop();
	},
	function() {
		start2Slider();
	}
);