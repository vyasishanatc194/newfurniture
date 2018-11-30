  jQuery(document).ready(function($) {
	
	var switcher_link = $('#skins-switcher');
	
	var styleswitcherstr = ' \
	<div id="style-switcher"> \
	  <div class="switchercontainer"> \
		  <span>Color</span> \
		  <a rel="395259" class="color-box" href=""></a> \
		  <a rel="53443d" class="color-box" href=""></a> \
		  <a rel="acc452" class="color-box" href=""></a> \
		  <a rel="83668d" class="color-box" href=""></a> \
		  <a rel="8d100d" class="color-box" href=""></a> \
		  <a rel="8c8c8c" class="color-box" href=""></a> \
		  <a rel="6aa8b0" class="color-box" href=""></a> \
		  <div class="clear"></div> \
	  </div> \
	  <div class="switchercontainer"> \
		  <a href="#" id="switcher-reset">Reset</a> \
		  <div class="clear"></div> \
	  </div> \
	</div> \
	';
	
	jQuery("body").prepend( styleswitcherstr );
	
	/*************** COLOR **************/
      jQuery('#style-switcher a.color-box').each(function (i) {
        var a =   jQuery(this);
        a.css({
            backgroundColor: '#' + a.attr('rel')
        })
    })    
	/*************** END COLOR **************/
	
  
  /********** bg-box.click ***************/
  jQuery('#style-switcher a.color-box').click(function (e) {
      e.preventDefault();
	  var color = jQuery(this).attr('rel');
        if(color == "6aa8b0") {
		  switcher_link.attr('href',"styles/teal/teal.css");
		  jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#5f9ca4");
		}
        if(color == "395259") {
		  switcher_link.attr('href',"styles/blue/blue.css");
		  jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#395259");
		}
        if(color == "53443d") {
		  switcher_link.attr('href',"styles/brown/brown.css");
		  jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#67331b");
		}
        if(color == "acc452") {
		  switcher_link.attr('href',"styles/lime/lime.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#9ab437");
		}
        if(color == "83668d") {
		  switcher_link.attr('href',"styles/purple/purple.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#9669a6");
		}
        if(color == "8d100d") {
		  switcher_link.attr('href',"styles/red/red.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#ad0501");
		}
        if(color == "8c8c8c") {
		  switcher_link.attr('href',"styles/silver/silver.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#b4b2b2");
		}
		Cufon.refresh();
      jQuery.cookie("ts_cookie_bgcolor",color);
  });
  /********** end bg-box.click ***********/

  var color 	= jQuery.cookie("ts_cookie_bgcolor");
  
  
  if(color){
        if(color == "6aa8b0") {
		  switcher_link.attr('href',"styles/teal/teal.css");
		  jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#5f9ca4");
		}
        if(color == "395259") {
		  switcher_link.attr('href',"styles/blue/blue.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#395259");
		}
        if(color == "53443d") {
		  switcher_link.attr('href',"styles/brown/brown.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#67331b");
		}
        if(color == "acc452") {
		  switcher_link.attr('href',"styles/lime/lime.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#9ab437");
		}
        if(color == "83668d") {
		  switcher_link.attr('href',"styles/purple/purple.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#9669a6");
		}
        if(color == "8d100d") {
		  switcher_link.attr('href',"styles/red/red.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a,  #content h4, #content h5, #content h6").css("color","#ad0501");
		}
        if(color == "8c8c8c") {
		  switcher_link.attr('href',"styles/silver/silver.css");
		   jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#b4b2b2");
		}
  }
	Cufon.refresh();
  
  jQuery("#switcher-reset").click(function(){
  		
		var color = "6aa8b0";
		switcher_link.attr('href',"styles/teal/teal.css");
		 jQuery("#content h1, #content h2, #content h2 a, #content h3, #content h3 a, #content h4, #content h5, #content h6").css("color","#5f9ca4");
		jQuery.cookie("ts_cookie_bgcolor", color);
		Cufon.refresh();
  });
         
});   
 