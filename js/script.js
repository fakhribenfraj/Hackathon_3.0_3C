/* Preloader */
$(window).on("load",function()
{
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
});
/* Show and Hide White Navigation */
$(function()
{
	// Show and Hide White Navigator on Page Load
	$(window).on("load",function()
	{
		if ($(window).scrollTop() > 50)
		{
			// Show White Navigation
			$("nav").addClass("white-nav-top");
			// Show Light Logo
			$(".navbar-brand img").attr("src", "img/icon 128x128.ico");
		}
		else
		{
			// Hide White Navigation
			$("nav").removeClass("white-nav-top");
			// Show Normal Logo
			$(".navbar-brand img").attr("src", "img/icon-light 128x128.ico");
		}
	});
	// Show and Hide White Navigator on Window's Scroll
	$(window).scroll(function()
	{
		if ($(window).scrollTop() > 50)
		{
			// Show White Navigation
			$("nav").addClass("white-nav-top");
			// Show Light Logo
			$(".navbar-brand img").attr("src", "img/icon 128x128.ico");
			// Show Back to Top Button
			$(".btn-back-to-top").fadeIn(50);
		}
		else
		{
			// Hide White Navigation
			$("nav").removeClass("white-nav-top");
			// Show Normal Logo
			$(".navbar-brand img").attr("src", "img/icon-light 128x128.ico");
			// Hide Back to Top Button
			$(".btn-back-to-top").fadeOut(50);
		}
	});
});
// Smooth Scrolling
$(function()
{
	$("a.smooth-scroll").click(function (event)
	{
		event.preventDefault();
		// Get Section ID, #Home
		var section_id = $(this).attr("href");
		$("html,body").animate
		({
			scrollTop: $(section_id).offset().top - 64
		},1250,"easeInOutExpo");
	});
});
// Mobile Menu
$(function()
{
	// Show Mobile Navigation
	$("#mobile-nav-open-btn").click(function ()
	{
		$("#mobile-nav").css("height","100%");
	});
	// Hide Mobile Navigation
	$("#mobile-nav-close-btn , #mobile-nav a").click(function ()
	{
		$("#mobile-nav").css("height","0%");
	});
});