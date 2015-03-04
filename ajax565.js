jQuery(document).ready(function() {
	$.ajax({url: "texto", cache: false})
  	.done(function(html) {
    	$("#texto1").append(html);
  	});

  	$("#boton").click(function() {
  		$.ajax({url: "texto2", cache: false})
  		.done(function(html) {
    		$("#texto2").append(html);
  		});
  	});
});
