
function loadturnos(iddelivery, tipo_entrega = ''){	

   
    $.ajax({

        type: "post",
        url: "carrito/delivery",
        data: {
            'idDistrito' : iddelivery,
            'latlng' : $("#latLng").val() ,
            'tipoEntrega':tipo_entrega //$('input[name="entrega"]:checked').val()

        }

    }).done(function (data) {


    	console.log(data.costo_delivery);
    	
        $('#carrito_tabla_totaljm').text("S/ " + data.total_soles);
        $('#costdelivery').html(data.costo_delivery);    



    });

    

	if(iddelivery > 0){

		$.ajax({

			type: "post",
			url: "carrito/turnos/",
			data: {"dispo" : true, "fecha": $("#datepicker-always-visible").val(), 'idDistrito' : iddelivery}  			             

		}).done(function(data){		

			let turnos = data.turnos;			
			$("#datepicker-always-visible").val(data.fecha).data('Zebra_DatePicker').show();
			$('#date_cart_delivery').html('<b>' + data.fecha_literal + '</b>');			
			$('#selec_horario').html('<option value="">Seleccione un horario</option>');	
			for (var x = 0; x < turnos.length; x++) {			
				$('#selec_horario').append('<option value="' + turnos[x]['nombre'] + '">' + turnos[x]['nombre'] + '</option>');

			};

		});

	

	}else{

		$('#selec_horario').html('<option value="">Seleccione un horario</option>');	

	}

	

} // End.Function.LoadTurnos



$('#visaNetJS').load(function() {
    
console.log('test');
    //$(this).contents().find('form').submit(function() { 
          $("#number").val('4919 – 1481 – 0785 – 9067'); // updated
         //alert(number);
       // return false; //return false prevents submit
    //});
  });


$(document).ready(function() {

    $(window).keydown(function(event){

        if(event.keyCode == 13) {

        event.preventDefault();

        return false;

        }

    });

});