$(document).ready(function(){
	$( "#main, img" ).click(function() {
  	$( "#first" ).fadeOut( "slow" );
  	$( "#main" ).fadeOut( "slow" );
	});

	$(function() {
    $( "#draggable" ).draggable({ helper: "original" });
    $( "#draggable2" ).draggable({ opacity: 0.7, helper: "clone" });
    $( "#draggable3" ).draggable({
      cursor: "move",
      cursorAt: { top: -12, left: -20 },
      helper: function( event ) {
        return $( "<div class='ui-widget-header'>I'm a custom helper</div>" );
      }
    });
    $( "#set div" ).draggable({ stack: "#set div" });
  	});

	$('.squirrel').click(function () {
        $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
	        next = $(this).parent().find('.squirrel').first();

	            next.show();
    });
	

});