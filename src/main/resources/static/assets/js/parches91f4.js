/*2021-06-01*/
window.addEventListener('load', function () {
    var $manijas = document.querySelectorAll('.panel-manija'), $total = $manijas.length;
    for (var $ii = 0; $ii < $total; $ii++) {
        var $manija = $manijas[$ii];
        $manija.addEventListener('click', function () {
            var $clases = this.parentElement.classList;
            if ($clases.contains('activo')) {
                $clases.remove('activo');
            } else {
                for (var $ii0 = 0; $ii0 < $total; $ii0++) {
                    $manijas[$ii0].parentElement.classList.remove('activo');
                }
                $clases.add('activo');
            }
        });
    }
});
$(".popup-ini2 .close").click(function () {
    $(".popup-ini2").fadeOut();
});
if ($(".popup-pie")) {
    $("#pie footer").css({'padding-bottom': $(".popup-pie").outerHeight(true) + 'px'});
}
$(".popup-pie .close").click(function () {
    $(".popup-pie").fadeOut(), $("#pie footer").css({'padding-bottom': '0'});
});
/*2022-03-23*/
/*
 function _marcar($este) {
 var $contenedores = document.querySelectorAll('.entrega-contenedor');
 $este.addEventListener('click', function () {
 for (var $ii = 0; $ii < $contenedores.length; $ii++) {
 $contenedores[$ii].classList.remove('activo');
 }
 document.querySelector($este.dataset.id).classList.add('activo');
 });
 }
 if (document.querySelectorAll('[name="entrega-tipo"]').length > 0) {
 var $radios = document.querySelectorAll('[name="entrega-tipo"]');
 for (var $ii = 0; $ii < $radios.length; $ii++) {
 _marcar($radios[$ii]);
 }
 }
 */
/*2022-09-10*/
/*
 function General() {
 this._CargaFloja = function ($claseCarga) {
 function _cargar() {
 if (document.querySelectorAll($claseCarga).length > 0) {
 var $venAlto = window.innerHeight, $venTercio = $venAlto / 3, $cargas = document.querySelectorAll($claseCarga);
 for (var $ii = 0; $ii < $cargas.length; $ii++) {
 var $carga = $cargas[$ii];
 if (!$carga.classList.contains('cargada')) {
 var $carTope = $carga.getBoundingClientRect().top, $carAlto = $carga.offsetHeight, $carBase = $carTope + $carAlto;
 if ((0 <= $carTope && $carTope <= $venTercio * 2) || ($venTercio < $carBase && $carBase < $venAlto)) {
 if ($carga.childNodes.length === 0 && $carga.dataset.elemento !== '' && $carga.dataset.elemento !== null && $carga.dataset.elemento !== undefined) {
 $carga.innerHTML = $carga.dataset.elemento;
 }
 $carga.classList.add('cargada');
 }
 }
 }
 }
 }
 window.addEventListener('load', _cargar), window.addEventListener('resize', _cargar), window.addEventListener('scroll', _cargar), window.addEventListener('touchmove', _cargar);
 };
 }
 new General()._CargaFloja('.carga-floja');
 */
/*2022-12-05*/
$('.abrir-carrito').on('click mouseenter', function (e) {
    if (window.innerWidth < 1025) {
        e.preventDefault();
    }
    $('#cabeza_carrito').addClass('pata_activo');
});
$('.cerrar-carrito').on('click', function () {
    $('#cabeza_carrito').removeClass('pata_activo');
});
$('#carrusel-cabecera').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    dots: false,
    items: 3,
    loop: true,
    margin: 0,
    responsiveClass: true,
    smartSpeed: 1000,
    nav: false,
    responsive: {
        420: {items: 3},
        620: {items: 4},
        820: {items: 5},
        1025: {items: 9, autoplay: false, autoWidth: true, loop: false, mouseDrag: false}
    }
});
/*2023-02-09*/
function _rango() {
    if ($('.rango').length > 0) {
        $('.rango').each(function () {
            var $rango = $(this), $minControl = $rango.find('.rango-control-min'), $minVal = Number($minControl.val()), $total = Number($minControl.attr('max')), $maxControl = $rango.find('.rango-control-max'), $maxVal = Number($maxControl.val()), $punto0 = $minVal * 100 / $total, $punto1 = $maxVal * 100 / $total, $minTxt = $rango.find('.rango-txt-min'), $maxTxt = $rango.find('.rango-txt-max');
            $minControl.css({'background': 'linear-gradient(to right,#ccc 0%,#ccc ' + $punto0 + '%,#004d92 ' + $punto0 + '%,#004d92 ' + $punto1 + '%,#ccc ' + $punto1 + '%,#ccc 100%)'}), $minTxt.text('S/' + $minVal + '.00'), $maxTxt.text('S/' + $maxVal + '.00');
            if ($minVal >= $maxVal) {
                $minControl.prop('disabled', true), $maxControl.prop('disabled', true), $minControl.val($maxVal - 0.1), $maxControl.val($minVal + 0.1);
            } else {
                $minControl.prop('disabled', false), $maxControl.prop('disabled', false);
            }
        });
    }
}
setInterval(_rango, 10);
/*2023-02-16*/
function _pegado($id, $media) {
    function _pegar() {
        if (document.querySelector($id)) {
            var $pegado = document.querySelector($id), $contenedor = $pegado.parentElement;
            var $venAlto = window.innerHeight, $cabAlto = document.querySelector('#cabecera').offsetHeight, $pegAlto = $pegado.offsetHeight, $pegBase = $cabAlto + $pegAlto, $conTope = $contenedor.getBoundingClientRect().top, $conAlto = $contenedor.offsetHeight, $conBase = $conTope + $conAlto;
            if ($pegAlto <= $conAlto && $conTope < $cabAlto && window.innerWidth >= $media) {
                if ($conTope < $cabAlto && $pegBase < $conBase) {
                    $pegado.style.width = $contenedor.offsetWidth + 'px', $pegado.style.margin = 0, $pegado.style.position = 'fixed', $pegado.style.bottom = 'auto', $pegado.style.left = $contenedor.getBoundingClientRect().left + 'px', $pegado.style.top = $cabAlto + 'px';
                } else if ($pegBase >= $conBase) {
                    $pegado.style.width = 100 + '%', $pegado.style.margin = 0, $pegado.style.position = 'absolute', $pegado.style.bottom = 0, $pegado.style.left = 0, $pegado.style.top = 'auto';
                }
            } else {
                $pegado.removeAttribute('style');
            }
            if (window.innerWidth >= $media) {
                if ($pegado.offsetHeight > $venAlto - $cabAlto) {
                    $pegado.style.height = ($venAlto - $cabAlto - 30) + 'px';
                }
            }
        }
    }
    window.addEventListener('load', _pegar), window.addEventListener('resize', _pegar), window.addEventListener('scroll', _pegar), window.addEventListener('panelcambio', _pegar), document.querySelector('#resultados').addEventListener('scroll', _pegar);
}
_pegado('#resultados-pegado', 1025);
if (document.querySelector('#espc_carrito')) {
    _pegado('#espc_carrito', 1025);
}
if (document.querySelector('#productos-pegado')) {
    _pegado('#productos-pegado', 1025);
}