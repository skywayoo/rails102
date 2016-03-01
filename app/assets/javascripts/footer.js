
        //$(document).ready(function(){ use page:change
        $(document).on("page:change", function(){
    		$("div.footer-icon-twitter").mouseover(function(){
        		$("footer").addClass("twitterwrap");
        		$("h4").css("color", "white");
    		});
    		$("div.footer-icon-twitter").mouseout(function(){
        		$("footer").removeClass("twitterwrap");
        		$("h4").css("color", "black");
    		});
    		$("div.footer-icon-facebook").mouseover(function(){
        		$("footer").addClass("facebookwrap");
        		$("h4").css("color", "white");
    		});
    		$("div.footer-icon-facebook").mouseout(function(){
        		$("footer").removeClass("facebookwrap");
        		$("h4").css("color", "black");
    		});
    		$("div.footer-icon-git").mouseover(function(){
        		$("footer").addClass("gitwrap");
        		$("h4").css("color", "white");
    		});
    		$("div.footer-icon-git").mouseout(function(){
        		$("footer").removeClass("gitwrap");
        		$("h4").css("color", "black");
    		});    		
		});