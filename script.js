$(function() {
	
	var i = 1;
	
	$(document).keypress(function(e) {
		if (e.keyCode == 32) {
			$("#stage").addClass("animation");
		
			var st1 = setTimeout(function() {
				$("#stage").removeClass("transition" + i).addClass("transition" + i++);
			}, 500);
			var st2 = setTimeout(function() {
				$("#stage").removeClass("animation");
			}, 2000);
		}
	});
	
	$("#showZ").click(function() {
		$("#introShape").addClass("show");
	});
	
	$("#rotX").click(function() {
		$("#introShape").toggleClass("rotateX");
	});
	
	$("#rotY").click(function() {
		$("#introShape").toggleClass("rotateY");
	});
	
	$("#rotZ").click(function() {
		$("#introShape").toggleClass("rotateZ");
	});
	
	$("#page1knockdown").click(function() {
		$("#page3").addClass("knockdown");
	});
	$("#page1back").click(function() {
		$("#page3").removeClass("knockdown");
	});
	
	var cssClick = 1;
	$("#cssProp").click(function() {
		$(this).addClass("clicked" + cssClick++);
	});
	
	$("#easing li").click(function() {
		$(this).addClass("animate");
	});
	
});