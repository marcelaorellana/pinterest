$(document).ready(function(){
	console.log(data);
	var temas = ["Bodas", "invitaciones", "ramos", "Fotografia", "Damas", "Luna de Miel", "iluminación", "verano", "invierno", "Presupuesto"];
	for(var j=0; j < 10; j++){
		var ficha = $("<div class='ficha'>");
			ficha.css({
				'background-image': 'url(dist/img/' + data[j].image_url + ')',
				'background-size': 'cover',
				 'position': 'relative'
			});
		var layer = $("<div class='layer'>");
			layer.css({
				'background-color': 'rgba('+ (j+100) +', '+(j*20)+', '+(j*12) + ', 0.6)',
				'position': 'absolute',
    			'top': 0,
    			'left': 0,
    			'width': '100%',
    			'height': '100%'
			});
			ficha.append(layer);
			ficha.append('<p class="ficha-p">'+temas[j]+'</p>');
		$('.fichas').append(ficha);
	}
	

	for(var i = 0; i < 20 ; i++){
		var imagen = $('<img>').attr('src', 'dist/img/' + data[i].image_url );
		var tarjeta =$('<div class="tarjeta" data-toggle="modal" data-target="#myModal">');
		var titulo = $('<h5>').attr('class', "titulo");
			titulo.text(data[i].title);
		var descripcion = $('<p>').attr('class', 'descrip');
			descripcion.text(data[i].description);
		var div = $('<div>').attr('class', 'divUsuario');
		var usuario = $('<p class="usuario">').append('<p><i class="fa fa-user-circle" aria-hidden="true"></i>'+data[i].username + '</p>');

		var hashtag = $('<p class="hashtag">').text('#' + data[i].hashtag);

		var modalHeader = '<div class="modalHeader"><div><i class="fa fa-upload" aria-hidden="true"></i><i class="fa fa-check" aria-hidden="true"></i><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div><button class="btn-guardar"><i class="fa fa-thumb-tack" aria-hidden="true"></i>Guardar</button></div>';
		var modalImage = '<h5>'+ data[i].title + '</h5><img src="dist/img/' + data[i].image_url +'">';

		var modalFooter = '<div class="usuario"><div class="usuario-central"><i class="fa fa-user-circle" aria-hidden="true"></i>'+ data[i].username +'</div><button class="btn-leer">Leerlo</button></div><div>'+ data[i].description +'</div>';

		var modal = $('<div class="modal fade  bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-body"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+ modalHeader + modalImage + modalHeader + modalFooter +'</div></div></div></div>');


		div.append(usuario);
		div.append(hashtag);

		tarjeta.append(imagen);
		tarjeta.append(titulo);
		tarjeta.append(descripcion);
		tarjeta.append(div);

		$('.pints').append(tarjeta);
		$('.pints').append(modal);
	}

	$(window).scroll(function() {
	   if($(window).scrollTop() + $(window).height() == $(document).height()) {
	       for(i ; i < 40 ; i++){
			var imagen = $('<img>').attr('src', 'dist/img/' + data[i].image_url );
			var tarjeta =$('<div class="tarjeta">');
			var titulo = $('<h5>').attr('class', "titulo");
				titulo.text(data[i].title);
			var descripcion = $('<p>').attr('class', 'descrip');
				descripcion.text(data[i].description);
			var div = $('<div>').attr('class', 'divUsuario');
			var usuario = $('<p>').text(data[i].username);
			var hashtag = $('<p>').text('#' + data[i].hashtag);
			div.append(usuario);
			div.append(hashtag);

			tarjeta.append(imagen);
			tarjeta.append(titulo);
			tarjeta.append(descripcion);
			tarjeta.append(div);
			$('.pints').append(tarjeta);
			}
			i = 50;
	   }
});
});