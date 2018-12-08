$(document).ready( function () {  
	$(".fun_fact").hide();	//hides all the text boxes for fun facts 

    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]); 
    $("Nav ul li ").removeClass("Here");
    var who = $("Nav ul li a[href='" + pathname  + "']").attr("class");
    $("#"+who).addClass("Here")
    // retrieves the path from the current page of the website
    //uses it to retrieve the class attribute from that site and identify user location  
    //on the website.


	$(window).scroll(function LightPage() {
		var position = $(document).scrollTop();
		//gets the position of the scrollbar on the websiteand compares it to the position
		//of the multiple book pages to identify and highlight the page the user its
		//reading.
	    if ((position >=0)&&(position < 700)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg0").addClass("this_page");
	    } 
	    if ((position >= 700)&&(position < 1380)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg1").addClass("this_page");	
	    } 
	    if ((position >= 1380)&&(position < 2100)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg2").addClass("this_page");	
	    } 
	    if ((position >= 2100)&&(position < 2850)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg3").addClass("this_page");	
	    }
	    if ((position >= 2850)&&(position <3550)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg4").addClass("this_page");	
	    }
	     if ((position >= 3550)&&(position < 4250)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg5").addClass("this_page");	
	    }
	    if ((position >= 4250)&&(position <4950)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg6").addClass("this_page");	
	    }
	    if ((position >= 4950)&&(position < 5650)){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg7").addClass("this_page");
	
	    }
	    if (position >= 5650){
			$("#pageNav ul li").removeClass("this_page")
	    	$("#pg8").addClass("this_page");

	    }

	});


	$("#autoplay").click(function pageScrolling() {
    	window.scrollBy(0,1);
    	scrolldelay = setTimeout(pageScrolling,150);
    	$("#audioR")[0].play();
	});
	// stablishes a "button" by clicking on the Auto-play word
	//that activates automatic scrolling and story reading

	//not used code, meant to pause the reading and scrolling:
	/*$("#pause").click(function pageScrolling() {
    	window.scrollBy(0,0);
    	scrolldelay = setTimeout(pageScrolling,150);
    	$("#audioR")[0].pause();
    });*/


    $("#carnival").hover(function(){
		$("#page1_ff").fadeIn("slow");// pops up the fun fact for each of the predefined words 
									//on the text in the story 
		}, function () {
			$("#page1_ff").fadeOut("fast");
			})

    $("#amontillado").hover(function(){
		$("#page2_ff").fadeIn("slow");
		}, function () {
			$("#page2_ff").fadeOut("fast");
			})
    $("#nitre").hover(function(){
		$("#page3_ff").fadeIn("slow");
		}, function () {
			$("#page3_ff").fadeOut("fast");
			})

    $("#latin").hover(function(){
		$("#page4_ff").fadeIn("slow");
		}, function () {
			$("#page4_ff").fadeOut("fast");
			})
    $("#masons").hover(function(){
		$("#page5_ff").fadeIn("slow");
		}, function () {
			$("#page5_ff").fadeOut("fast");
			})

    $("#catacombs").hover(function(){
		$("#page6_ff").fadeIn("slow");
		}, function () {
			$("#page6_ff").fadeOut("fast");
			})
    $("#torch").hover(function(){
		$("#page7_ff").fadeIn("slow");
		}, function () {
			$("#page7_ff").fadeOut("fast");
			})

    $("#latin2").hover(function(){
		$("#page8_ff").fadeIn("slow");
		}, function () {
			$("#page8_ff").fadeOut("fast");
			})

});


  

