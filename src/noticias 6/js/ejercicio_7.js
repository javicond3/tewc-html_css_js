$(document).ready(function(){
	$('.noticia:even').addClass('azul');
    jQuery(function($) {
        $("#rss").rss("https://www.upm.es/e-politecnica/?feed=atom");
    })

});