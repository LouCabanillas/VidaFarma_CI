/*JavaScript Document*/
$('.speaker').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('mute');
});
//var vid = document.getElementById("videoHome");
//vid.autoplay = true;
//vid.audio = true;
//vid.muted=false;
//vid.load();
/*
$(document).ready(function () {
    if ($("video").prop('muted', true)) {
    }
    $("#mute").click(function () {
        if ($("video").prop('muted')) {
            $("video").prop('muted', false);
        } else {
            $("video").prop('muted', true);
        }
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        nav: false
    });
});
*/
jQuery("#carousel-pc").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 0,
    /*
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 10000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    nav: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1024: {
            items: 1
        },
        1366: {
            items: 1
        }
    }
});
jQuery("#carousel-movil").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 0,
    /*
     animateOut: 'fadeOut',
     animateIn: 'fadeIn',
     */
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 10000,
    smartSpeed: 800,
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    nav: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1024: {
            items: 1
        },
        1366: {
            items: 1
        }
    }
});
jQuery(".owl-carouseles-home").owlCarousel({
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 10000,
    dots: false,
    lazyLoad: true,
    loop: true,
    margin: 0,
    nav: true,
    responsiveClass: true,
    smartSpeed: 800,
    responsive: {
        0: { items: 2 },
        619: { items: 3 },
        1024: { items: 4 },
        1599: { items: 5 }
    }
});
$('#login').fadeIn();

$(".popup-btn").click(function () {
    var target = $(this).attr("href");
    $(target).fadeIn();
});

$(".popup-ini .close").click(function () {
    $(".popup-ini").fadeOut();
    $("footer").css({'padding-bottom': '0'});
});
jQuery.validator.addMethod("lettersonly", function (value, element)
{
    return this.optional(element) || /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/i.test(value);
}, "Letters and spaces only please");
function farmaciaConstructor() {
    var self = this;
    /*rico img*/this.ricoImg = function () {
        var dimensionar = function () {
            $(".rico img").each(function () {
                var esteImg = $(this), esteAncho = esteImg.clientWidth, esteAlto = esteImg.clienteHeight;
                esteImg.css({"width": esteAncho + "px", "height": esteAlto + "px"});
            });
        };
        dimensionar();
        $(window).on("load", dimensionar);
    };
    /*rodar gatillo*/this.rodarGatillo = function () {
        var documento = $(document), ventana = $(window), cuerpo = $("body");
        var animacion = function (i) {
            var presto = cuerpo.find(".presto"), estePresto = presto.eq(i), demora = estePresto.data("demora");
            setTimeout(function () {
                estePresto.addClass("activa");
                estePresto.children(".serie").each(function (i0) {
                    var serie = $(this), pausa = estePresto.data("pausa"), nieto = serie.find(".nieto");
                    setTimeout(function () {
                        serie.addClass("activa");
                        nieto.addClass("activa");
                    }, i0 * +pausa + +pausa);
                });
            }, demora);
        };
        var gatillo = function (orden) {
            var presto = cuerpo.find(".presto");
            presto.each(function (i) {
                var este = $(this), esteTope = este.offset().top, ventanaTope = ventana.scrollTop(), ventanaAlto = ventana.outerHeight(true);
                if (esteTope < ventanaTope + ventanaAlto) {
                    if (orden) {
                        setTimeout(function () {
                            animacion(i);
                        }, esteTope - ventanaTope);
                    } else {
                        animacion(i);
                    }
                }
            });
        };
        setTimeout(function () {
            gatillo(true);
        }, 1000);
        ventana.on("load", function () {
            gatillo(true);
            ventana.on("resize scroll", function () {
                gatillo(false);
            });
        });
        documento.on("ajaxSuccess", function () {
            setTimeout(function () {
                gatillo(true);
            }, 500);
        });
    };
    /*rodar achicar*/this.rodarAchicar = function () {
        var ventana = $(window), mayor = $("#main");
        var achicar = function () {
            (ventana.scrollTop() !== 0) ? mayor.addClass("achica") : mayor.removeClass("achica");
        };
        achicar();
        ventana.on("load resize scroll", achicar);
    };
    /*rodar opacar*/this.rodarOpacar = function () {
        var ventana = $(window), mayor = $("#main"), cabeza = $("#cabeza");
        var opacar = function () {
            (ventana.scrollTop() >= ventana.outerHeight(true) - cabeza.outerHeight(true)) ? mayor.addClass("opaca") : mayor.removeClass("opaca");
        };
        opacar();
        ventana.on("load resize scroll", opacar);
    };
    /*rodar pantallas*/this.rodarPantallas = function () {
        var rodar = function (evento) {
            var rollo = true, ventana = $(window), cuerpo = $("html");
            cuerpo.on(evento, function (e) {
                var mayorAlto = $("#main").outerHeight();
                if (ventana.width() >= 1025 && ventana.outerHeight(true) >= 600) {
                    e.preventDefault(e);
                    e.stopPropagation();
                    if (rollo === true) {
                        rollo = false;
                        var delta = (window.mozInnerScreenX == null) ? e.originalEvent.wheelDelta : -e.originalEvent.detail;
                        if (delta >= 0) {
                            cuerpo.animate({scrollTop: (Math.ceil(ventana.scrollTop() / mayorAlto) - 1) * mayorAlto + "px"}, 600, "");
                        } else {
                            cuerpo.animate({scrollTop: (Math.ceil(ventana.scrollTop() / mayorAlto) + 1) * mayorAlto + "px"}, 600, "");
                        }
                        setTimeout(function () {
                            rollo = true;
                        }, 1000);
                    }
                }
            });
        };
        var macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'], windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'], iosPlatforms = ['iPhone', 'iPad', 'iPod'], os = null;
        if (macosPlatforms.indexOf(window.navigator.platform) !== -1 || iosPlatforms.indexOf(window.navigator.platform) !== -1) {
            os = 'Mac OS o iOS';
        } else if (windowsPlatforms.indexOf(window.navigator.platform) !== -1 || /Android/.test(window.navigator.userAgent) || (!os && /Linux/.test(window.navigator.platform))) {
            os = 'Windows, Android o Linux';
            (window.mozInnerScreenX == null) ? rodar("mousewheel") : rodar("DOMMouseScroll");
        }
    };
    /*pata acordion*/this.pataAcordion = function () {
        var ventana = $(window), ventanaAncho = ventana.outerWidth(true), cuerpo = $("body");
        var automatico = function () {
            $(".acordion_item.pata_activo").each(function () {
                var esteItem = $(this), esteContenedor = esteItem.children(".acordion_contenedor"), esteContenido = esteContenedor.children(".acordion_contenido"), esteAlto = esteContenido.outerHeight(true);
                esteContenedor.css({"height": esteAlto + "px"});
            });
            $(".acordion_item:not(.pata_activo)").children(".acordion_contenedor").removeAttr("style");
        };
        automatico();
        ventana.on("load resize medir", automatico);
        setTimeout(automatico, 1000);
        cuerpo.on("click", ".acordion_pata", function (e) {
            var estePata = $(this), esteEnlace = estePata.attr("href"), esteGrupo = estePata.parent(".acordion_item"), esteAcordion = esteGrupo.parent(".acordion_agil"), estePalanca = esteAcordion.data("palanca"), esteContenedor = esteGrupo.children(".acordion_contenedor"), esteContenido = esteContenedor.children(".acordion_contenido"), esteAlto = esteContenido.outerHeight(true), otroGrupo = esteGrupo.siblings(), otroContenedor = otroGrupo.children(".acordion_contenedor");
            (esteEnlace === "" || esteEnlace === "javascript:;" || esteEnlace === "javascript:void(0);") ? e.preventDefault(e) : '';
            if (estePalanca && esteGrupo.is(".pata_activo")) {
                esteGrupo.removeClass("pata_activo pata_seguro");
                esteContenedor.removeAttr("style");
            } else {
                esteGrupo.addClass("pata_activo");
                esteContenedor.css({"height": esteAlto + "px"});
            }
            otroGrupo.removeClass("pata_activo pata_seguro");
            otroContenedor.removeAttr("style");
            ventana.trigger("medir");
        });
        cuerpo.on("click", ".acordion_cerrar", function (e) {
            var esteCerrar = $(this), esteEnlace = esteCerrar.attr("href"), acordionGrupo = esteCerrar.closest(".acordion_item"), acordionContenedor = acordionGrupo.children(".acordion_contenedor");
            (esteEnlace === "" || esteEnlace === "javascript:;" || esteEnlace === "javascript:void(0);") ? e.preventDefault(e) : '';
            acordionGrupo.removeClass("pata_activo pata_seguro");
            acordionContenedor.removeAttr("style");
            ventana.trigger("medir");
        });
        cuerpo.on("mouseenter", ".acordion_item[data-sobre]", function (e) {
            if (ventanaAncho >= 1025) {
                var esteGrupo = $(this), esteContenedor = esteGrupo.children(".acordion_contenedor"), esteContenido = esteContenedor.children(".acordion_contenido"), esteAlto = esteContenido.outerHeight(true);
                esteGrupo.addClass("pata_activo")
                esteContenedor.css({"height": esteAlto + "px"});
                ventana.trigger("medir");
            }
        });
        cuerpo.on("mouseleave", ".acordion_item[data-sobre]:not(.pata_seguro)", function (e) {
            if (ventanaAncho >= 1025) {
                var esteGrupo = $(this), esteContenedor = esteGrupo.children(".acordion_contenedor");
                esteGrupo.removeClass("pata_activo")
                esteContenedor.removeAttr("style");
                ventana.trigger("medir");
            }
        });
        cuerpo.on("click", ".acordion_seguro", function () {
            if (ventanaAncho >= 1025) {
                var esteSeguro = $(this), esteGrupo = esteSeguro.closest(".acordion_item[data-sobre]");
                esteGrupo.addClass("pata_seguro");
            }
        });
    };
    /*pata ancla*/this.pataAncla = function () {
        var ventana = $(window), ventanaAncho = ventana.outerWidth(true), cuerpo = $("body");
        var automatico = function () {
            $(".ancla_contenedor.pata_activo").each(function () {
                var esteContenedor = $(this), esteContenido = esteContenedor.children(".ancla_contenido"), esteAlto = esteContenido.outerHeight(true);
                esteContenedor.css({"height": esteAlto + "px"});
            });
            $(".ancla_contenedor:not(.pata_activo)").removeAttr("style");
        };
        automatico();
        ventana.on("load resize medir", automatico);
        setTimeout(automatico, 1000);
        cuerpo.on("click", ".ancla_pata", function (e) {
            var estePata = $(this), esteEnlace = estePata.attr("href"), esteGrupo = estePata.data("grupo"), esteId = estePata.data("id"), esteIndice = estePata.data("indice"), estePalanca = estePata.data("palanca"), esteTiempo = estePata.data("tiempo"), estosPatas = $(".ancla_pata.grupo" + esteGrupo + ".indice" + esteIndice), otrosPatas = $(".ancla_pata.grupo" + esteGrupo + ":not(.indice" + esteIndice + ")"), estosContenedores = $(".ancla_contenedor.grupo" + esteGrupo + ".indice" + esteIndice), otrosContenedores = $(".ancla_contenedor.grupo" + esteGrupo + ":not(.indice" + esteIndice + ")");
            (!esteEnlace || esteEnlace === "" || esteEnlace === "javascript:;" || esteEnlace === "javascript:void(0);") ? e.preventDefault(e) : "";
            if (esteId) {
                var esteRodar = $(esteId), esteTope = esteRodar.offset().top, cuerpo = $("html,body"), cabeza = $("#cabeza"), cabezaAlto = cabeza.outerHeight(true), ventanaTope = ventana.scrollTop(), ventanaAlto = ventana.outerHeight(true);
            }
            if (estePalanca && estePata.is(".pata_activo")) {
                estosPatas.removeClass("pata_activo");
                estosContenedores.removeClass("pata_activo").removeAttr("style");
            } else {
                estosPatas.addClass("pata_activo");
                estosContenedores.addClass("pata_activo");
                estosContenedores.each(function (i) {
                    var esteContenedor = $(this), esteContenido = esteContenedor.children(".ancla_contenido"), esteAlto = esteContenido.outerHeight(true);
                    esteContenedor.css({"height": esteAlto + "px"});
                });
                if (esteTiempo) {
                    setTimeout(function () {
                        estosPatas.removeClass("pata_activo");
                        estosContenedores.removeClass("pata_activo").removeAttr("style");
                    }, 5000);
                }
            }
            otrosPatas.removeClass("pata_activo");
            otrosContenedores.removeClass("pata_activo").removeAttr("style");
            if (esteTope > ventanaTope + ventanaAlto * 2 / 3 || esteTope < ventanaTope) {
                setTimeout(function () {
                    cuerpo.animate({scrollTop: esteTope - cabezaAlto});
                }, 400);
            }
            ventana.trigger("medir");
        });
        cuerpo.on("click", ".ancla_flecha", function () {
            var esteFlecha = $(this), esteGrupo = esteFlecha.data("grupo"), esteSentido = esteFlecha.data("sentido"), estePata = $(".ancla_pata.pata_activo.grupo" + esteGrupo), esteIndice = estePata.data("indice"), anclaLista = [], anclaMaximo, otraFlecha = (esteSentido) ? $(".ancla_previo") : $(".ancla_proximo");
            $(".ancla_pata").each(function (i) {
                var estePata0 = $(this), esteIndice0 = estePata0.data("indice");
                anclaLista[i] = esteIndice0;
            });
            var anclaMaximo = Math.max.apply(null, anclaLista);
            esteFlecha.addClass("pata_activo");
            otraFlecha.removeClass("pata_activo");
            if (esteSentido) {
                (esteIndice === anclaMaximo) ? $(".ancla_pata.grupo" + esteGrupo + ".indice0").trigger("click") : $(".ancla_pata.grupo" + esteGrupo + ".indice" + (esteIndice + 1)).trigger("click");
            } else {
                (esteIndice === 0) ? $(".ancla_pata.grupo" + esteGrupo + ".indice" + anclaMaximo).trigger("click") : $(".ancla_pata.grupo" + esteGrupo + ".indice" + (esteIndice - 1)).trigger("click");
            }
            ventana.trigger("medir");
        });
        cuerpo.on("mouseenter", ".ancla_pata[data-sobre]", function (e) {
            if (ventanaAncho >= 1025) {
                var estePata = $(this), esteGrupo = estePata.data("grupo"), esteIndice = estePata.data("indice"), estosPatas = $(".ancla_pata.grupo" + esteGrupo + ".indice" + esteIndice), esteContenedor = $(".ancla_contenedor.grupo" + esteGrupo + ".indice" + esteIndice), esteContenido = esteContenedor.children(".ancla_contenido"), esteAlto = esteContenido.outerHeight(true);
                estosPatas.addClass("pata_activo");
                esteContenedor.addClass("pata_activo").css({"height": esteAlto + "px"});
                ventana.trigger("medir");
            }
        });
        cuerpo.on("mouseleave", ".ancla_pata[data-sobre]", function (e) {
            if (ventanaAncho >= 1025) {
                var estePata = $(this), esteGrupo = estePata.data("grupo"), esteIndice = estePata.data("indice"), estosPatas = $(".ancla_pata.grupo" + esteGrupo + ".indice" + esteIndice), esteContenedor = $(".ancla_contenedor.grupo" + esteGrupo + ".indice" + esteIndice);
                estosPatas.removeClass("pata_activo");
                esteContenedor.removeClass("pata_activo").removeAttr("style");
                ventana.trigger("medir");
            }
        });
        cuerpo.on("mouseenter", ".ancla_contenedor[data-sobre]", function () {
            if (ventanaAncho >= 1025) {
                var esteContenedor = $(this), esteContenido = esteContenedor.children(".ancla_contenido"), esteAlto = esteContenido.outerHeight(true);
                esteContenedor.addClass("pata_activo").css({"height": esteAlto + "px"});
                ventana.trigger("medir");
            }
        });
        cuerpo.on("mouseleave", ".ancla_contenedor[data-sobre]", function () {
            if (ventanaAncho >= 1025) {
                var esteContenedor = $(this);
                esteContenedor.removeClass("pata_activo").removeAttr("style");
                ventana.trigger("medir");
            }
        });
    };
    /*pata panel*/this.pataPanel = function () {
        var ventana = $(window), cuerpo = $("body");
        var automatico = function () {
            $(".panel_contenedor.pata_activo").each(function () {
                var esteContenedor = $(this), esteContenido = esteContenedor.children(".panel_contenido"), esteAlto = esteContenido.outerHeight(true);
                esteContenedor.css({"height": esteAlto + "px"});
            });
            $(".panel_contenedor:not(.pata_activo)").removeAttr("style");
        };
        automatico();
        ventana.on("load resize medir", automatico);
        setTimeout(automatico, 1000);
        cuerpo.on("click", ".panel_pata", function (e) {
            var estePata = $(this), esteEnlace = estePata.attr("href"), esteItem = estePata.parent(".panel_item"), esteIndice = esteItem.index(), estePanel = estePata.closest(".panel_agil"), estePalanca = estePanel.data("palanca"), esteContenedor = estePanel.find(".panel_contenedor").eq(esteIndice), esteContenido = esteContenedor.children(".panel_contenido"), esteAlto = esteContenido.outerHeight(true), otrosItems = esteItem.siblings(), otrosContenedores = esteContenedor.siblings();
            (esteEnlace === "" || esteEnlace === "javascript:;" || esteEnlace === "javascript:void(0);") ? e.preventDefault(e) : '';
            if (estePalanca && esteItem.is(".pata_activo")) {
                esteItem.removeClass("pata_activo");
                esteContenedor.removeClass("pata_activo").removeAttr("style");
            } else {
                esteItem.addClass("pata_activo");
                esteContenedor.addClass("pata_activo").css({"height": esteAlto + "px"});
            }
            otrosItems.removeClass("pata_activo");
            otrosContenedores.removeClass("pata_activo").removeAttr("style");
            ventana.trigger("medir");
        });
        cuerpo.on("click", ".panel_cerrar", function (e) {
            var esteCerrar = $(this), esteEnlace = esteCerrar.attr("href"), esteContenedor = esteCerrar.closest(".panel_contenedor"), esteIndice = esteContenedor.index(), estePanel = esteContenedor.closest(".panel_agil"), esteMenu = estePanel.children(".panel_menu"), panelItem = esteMenu.children(".panel_item"), esteItem = panelItem.eq(esteIndice);
            (esteEnlace === "" || esteEnlace === "javascript:;" || esteEnlace === "javascript:void(0);") ? e.preventDefault(e) : '';
            esteItem.removeClass("pata_activo");
            esteContenedor.removeClass("pata_activo").removeAttr("style");
            ventana.trigger("medir");
        });
    };
    /*pata selector*/this.pataSelector = function () {
        var ventana = $(window);
        $("body").on("change", ".selector_pata", function (e) {
            var estePata = $(this), esteOpcion = estePata.children("option:selected"), esteIndice = esteOpcion.index() + 1, estosContenedores = $(".selector_contenedor:nth-child(" + esteIndice + ")"), otrosContenedores = $(".selector_contenedor:not(:nth-child(" + esteIndice + "))");
            estosContenedores.addClass("pata_activo");
            otrosContenedores.removeClass("pata_activo");
            ventana.trigger("medir");
        });
    };
    /*campo rotulo*/
    this.campoRotulo = function () {
        var cuerpo = $("body");
        $(window).on("load", function () {
            $(".rotulo").each(function (i) {
                var esteForm = $(this), esteCampo = esteForm.children("input,select,textarea"), esteValor = esteCampo.val();
                (esteValor === "" || esteValor === null) ? esteForm.removeClass("activo") : esteForm.addClass("activo");
            });
        });
        cuerpo.on("focus", ".rotulo>*:not(label)", function () {
            var esteCampo = $(this), esteForm = esteCampo.parents(".rotulo"), esteError = esteForm.children(".error");
            esteError.remove();
        });
        cuerpo.on("blur", ".rotulo>*:not(label)", function () {
            var esteCampo = $(this), esteValor = esteCampo.val(), esteForm = esteCampo.parent(".rotulo"), esteError = esteForm.children(".error");
            esteError.remove();
            (esteValor === "" || esteValor === null) ? esteForm.removeClass("activo") : esteForm.addClass("activo");
        });
    };
    /*campo numero*/
    this.campoNumero = function () {
        var cuerpo = $("body");
        cuerpo.on("click", ".numero_menos", function () {
            var esteBoton = $(this), esteForm = esteBoton.parent(".form.numero"), esteCampo = esteForm.children("input"), esteValor = esteCampo.val();
            (esteValor > 1) ? esteCampo.val(esteValor - 1) : "";
        });
        cuerpo.on("click", ".numero_mas", function () {
            var esteBoton = $(this), esteForm = esteBoton.parent(".form.numero"), esteCampo = esteForm.children("input"), esteValor = esteCampo.val();
            var new_val = (+esteValor + 1);
            if (new_val <= $('#prouctos_numero').attr('max')) {
                esteCampo.val(new_val);

            }
            ;
        });
    };
    /*campo fichar*/
    this.campoFichar = function () {
        $("body").on("change", ".form.ficha input[type='file']", function () {
            var esteCampo = $(this), esteValor = esteCampo.val().split("\\").pop(), esteForm = esteCampo.parent(".form.ficha"), esteRotulo = esteForm.children("label"), esteEspacio = esteRotulo.children("span");
            esteEspacio.html("Archivo: " + esteValor);
        });
    };

    /*campo fichar2*/
    this.campoFichar2 = function () {
        $("body").on("change", ".form.ficha input[type='file']", function () {
            var esteCampo = $(this), esteValor = esteCampo.val().split("\\").pop(), esteForm = esteCampo.parent(".form.ficha"), esteRotulo = esteForm.children("label"), esteEspacio = esteRotulo.children("span");
            esteEspacio.html("Archivo: " + esteValor);
        });
    };

    /*placeholder form*/
    this.placeholderForm = function () {
        var marcar = function () {
            $("input,textarea").placeholder();
        };
        marcar();
        $(document).on("ajaxSuccess", marcar);
    };
    /*malihu barra*/this.malihuBarra = function () {
        //$(".malihu_contenido").mCustomScrollbar({axis: "y", scrollInertia: 100});
        //return false;
    };
    /*validate registro*/
    this.validateRegistro = function (url) {

        $(".validar_registro").validate({
            rules: {
                "registrate_nombre": {required: true, lettersonly: true, minlength: 3},
                "registrate_apellidos": {required: true, lettersonly: true, minlength: 3},
                "registrate_dni": {required: true, minlength: 8, maxlength: 8, number: true},
                /*"registrate_telefono": {required: true, minlength: 7, maxlength: 10, number: true},*/
                "registrate_celular": {required: true, minlength: 9, maxlength: 9, number: true},
                "registrate_correo": {required: true, minlength: 11},
                "registrate_contrasena": {required: true, minlength: 6},
                "repetir": {required: true, minlength: 6, equalTo: "#registro_contrasena"},
                "politicas": {required: true}
            },
            messages: {
                "registrate_nombre": {required: "", lettersonly: "", minlength: ""},
                "registrate_apellidos": {required: "", lettersonly: "", minlength: ""},
                "registrate_dni": {required: "", minlength: "", maxlength: "", number: ""},
                /* "registrate_telefono": {required: "", minlength: "", maxlength: "", number: ""},*/
                "registrate_celular": {required: "", minlength: "", maxlength: "", number: ""},
                "registrate_correo": {required: "", minlength: ""},
                "registrate_contrasena": {required: "", minlength: ""},
                "repetir": {required: "", minlength: "", equalTo: "#registro_contrasena"},
                "politicas": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {
                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'registro_menu'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };


    /*validate registro*/
    this.validateRegistro2 = function (url) {

        $(".validar_registro2").validate({
            rules: {
                "registrate_nombre": {required: true, lettersonly: true, minlength: 3},
                "registrate_apellidos": {required: true, lettersonly: true, minlength: 3},
                "registrate_dni": {required: true, minlength: 8, maxlength: 8, number: true},
                /*"registrate_telefono": {required: true, minlength: 7, maxlength: 10, number: true},*/
                "registrate_celular": {required: true, minlength: 9, maxlength: 9, number: true},
                "registrate_correo": {required: true, minlength: 11},
                "registrate_contrasena": {required: true, minlength: 6},
                "repetir": {required: true, minlength: 6, equalTo: "#registro_contrasena2"},
                "politicas": {required: true}
            },
            messages: {
                "registrate_nombre": {required: "", lettersonly: "", minlength: ""},
                "registrate_apellidos": {required: "", lettersonly: "", minlength: ""},
                "registrate_dni": {required: "", minlength: "", maxlength: "", number: ""},
                /* "registrate_telefono": {required: "", minlength: "", maxlength: "", number: ""},*/
                "registrate_celular": {required: "", minlength: "", maxlength: "", number: ""},
                "registrate_correo": {required: "", minlength: ""},
                "registrate_contrasena": {required: "", minlength: ""},
                "repetir": {required: "", minlength: "", equalTo: "#registro_contrasena2"},
                "politicas": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {

                $("#btn-registrarme2").attr('disabled', 'disabled');
                $("#btn-registrarme2 > span").append('<img style="height:21px; margin-left: 8px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'registro_page'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };

    /*validate sesion*/
    this.validateSesion = function (url) {
        $(".validar_sesion").validate({
            rules: {
                "sesion_correo": {required: true, minlength: 11},
                "sesion_contrasena": {required: true, minlength: 6}
            },
            messages: {
                "sesion_correo": {required: "", minlength: ""},
                "sesion_contrasena": {required: "", minlength: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }
        });
    };


    /*validate sesion*/
    this.validateSesion2 = function (url) {
        $(".validar_sesion2").validate({
            rules: {
                "sesion_correo": {required: true, minlength: 11},
                "sesion_contrasena": {required: true, minlength: 6}
            },
            messages: {
                "sesion_correo": {required: "", minlength: ""},
                "sesion_contrasena": {required: "", minlength: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }
        });
    };
    /*validate colvidado contraseña*/
    this.validateActualizar = function (url) {
        $(".actualizar_contrasena").validate({
            rules: {
                "contrasena": {required: true, minlength: 6},
                "repetir": {required: true, minlength: 6},
            },
            messages: {
                "contrasena": {required: "", minlength: ""},
                "repetir": {required: "", minlength: ""},
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }
        });
    };
    /*validate colvidado contraseña*/
    this.validateOlvido = function (url) {
        $(".validar_olvidado").validate({
            rules: {
                "correo": {required: true, minlength: 11},
            },
            messages: {
                "correo": {required: "", minlength: ""},
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {

                $("#btn-enviar-olvidado").attr('disabled', 'disabled');
                $("#btn-enviar-olvidado > span").append('<img style="height:21px; margin-left: 8px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'olvido'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };

    /*validate datos*/
    this.validateDatos = function (url) {
        $(".validar_datos").validate({
            rules: {
                "nombres": {required: true, minlength: 3},
                "apellidos": {required: true, minlength: 3},
                "documento": {required: true, minlength: 8, maxlength: 8, number: true},
                "telefono": {required: true, minlength: 7, number: true},
                "celular": {required: true, minlength: 9, number: true},
                "correo": {required: true, minlength: 11}
            },
            messages: {
                "nombres": {required: "", minlength: ""},
                "apellidos": {required: "", minlength: ""},
                "documento": {required: "", minlength: "", maxlength: "", number: ""},
                "telefono": {required: "", minlength: "", number: ""},
                "celular": {required: "", minlength: "", number: ""},
                "correo": {required: "", minlength: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }
        });
    };
    /*validate contrasena*/
    this.validateContrasena = function (url) {
        $(".validar_contrasena").validate({
            rules: {
                "actual": {required: true, minlength: 6},
                "nueva": {required: true, minlength: 6},
                "repetir": {required: true, minlength: 6, equalTo: "#contrasena_nueva"}
            },
            messages: {
                "actual": {required: "", minlength: ""},
                "nueva": {required: "", minlength: ""},
                "repetir": {required: "", minlength: "", equalTo: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }
        });
    };

    var domVisa = false;
    function cargaPopUpVisa(data) {

        var scriptVisa = document.getElementById('scriptvisa');
        !scriptVisa || scriptVisa.parentNode.removeChild(scriptVisa);
        var el = document.createElement('script');
        el.id = "scriptvisa";

        // DEV //
        //el.src = 'https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true';

        // PROD //
        el.src = 'https://static-content.vnforapps.com/v2/js/checkout.js';

        el.dataset.sessiontoken = data.sessionToken;
        el.dataset.merchantid = data.merchantID;
        el.dataset.channel = "web";
        el.dataset.buttonsize = "";
        el.dataset.buttoncolor = "";
        el.dataset.merchantlogo = data.baseUrl + 'assets/svg/logo-color.svg';
        el.dataset.merchantname = "FARMACIA UNIVERSAL";
        el.dataset.formbuttoncolor = "#0A0A2A";
        el.dataset.showamount = "";
        el.dataset.purchasenumber = data.pedido;
        el.dataset.amount = data.monto;

        /*el.dataset.cardholdername = "Farmacia Test";
         el.dataset.cardholderlastname = "Test";
         el.dataset.cardholderemail = "accept@cybersource.com";
         */
        el.dataset.cardholdername = "";
        el.dataset.cardholderlastname = "";
        el.dataset.cardholderemail = "";

        el.dataset.usertoken = "";
        el.dataset.recurrence = "";
        el.dataset.frequency = "";
        el.dataset.recurrencetype = "";
        el.dataset.recurrenceamount = "";
        el.dataset.documenttype = "0";
        el.dataset.documentid = "";
        el.dataset.beneficiaryid = "";
        el.dataset.productid = "";
        el.dataset.phone = "";
        el.dataset.timeouturl = data.baseUrl; //data.baseUrl + 'pago-tarjeta/respuesta';
        el.onload = function () {

            // cierra el popup loading exe justo antes de abrir el pop visa -- modo test

            if (window.MutationObserver) {
                if (!domVisa) {
                    var observer = new MutationObserver(function (mutations) {
                        mutations.forEach(function (mutation) {
                            //console.log( typeof(mutation.addedNodes[0].id) );
                            //console.log(mutation);
                            //console.log(mutation.addedNodes.length);

                            if (mutation.type === 'childList') {

                                if (mutation.addedNodes.length > 0 && (mutation.addedNodes[0].nodeName === 'IFRAME' ||
                                        mutation.addedNodes[0].nodeName === 'OBJECT')) {
                                    //console.log("visaNetWrapper agregado");
                                    domVisa = true;
                                    $.fancybox.close();
                                   // $("#number").val('4919 – 1481 – 0785 – 9067');
                                    //$('#visaNetJS').contents().find('#number').val('4919 – 1481 – 0785 – 9067');
                                    //observer.disconnect();
                                }
                                //console.log('A child node has been added or removed.');
                            }
                        });
                    });
                    // configuration of the observer
                    var config = {
                        childList: true,
                    };
                    // pass in the target node, as well as the observer options
                    observer.observe($("body")[0], config);
                } else {
                    $.fancybox.close();
                    //console.log("cerrado fancy else");
                }
            } else {
                $.fancybox.close();
            }


            // end test cerrar popupexe


            var attributes = document.getElementById('scriptvisa').attributes;
            var params = {
                "action": data.baseUrl + 'pago-tarjeta/respuesta',
                "tabOnMobile": !1
            };

            function estandarizar(a) {
                function b(a, b) {
                    return b.toUpperCase();
                }
                return a.replace(/(?:[-_])(\w)/g, b);
            }
            ;
            for (var i = 0; i < attributes.length; i++) {
                var name, params, attribute = attributes[i];
                null !== (name = attribute.name.match(/^data-(.+)$/)) && (params[estandarizar(name[1])] = attribute.value);
            }
            ;

            window.VisanetCheckout.configure(params, function () {
                //console.log("!jaa");
            });
            window.VisanetCheckout.open(params);

        };

        document.body.appendChild(el);
        //$("#btn-pagar").removeAttr("disabled");
        //$("#btn-pagar span").html("<strong>PAGAR</strong>");
    }

    /*validate carrito*/
    // funcion para validar el DNI del Cliente -----------------------
    $.validator.addMethod("dniCheck", function (value, element) {
         
        var isSuccess = false;       
        //$('#loading-form-dni').css("visibility","visible");     
           
        if (value.length == 8) {

           // $("#carrito_comprador_nombres").val('');            
           // $("#carrito_comprador_apellido_paterno").val('');            

            $.ajax({
                type: "post",
                url: "https://api.migo.pe/api/v1/dni",
                async: false,
                data: { dni: value , token:'MOnooL1O7PEJJbx5sIXmqDEUk8O8spjEpohRccpwG3Ex5IjwX5wfkZXBviz8'},                
                beforeSend: function () {
                },
                success: function (response) {
                     
                    var name        = response.nombre;
                    var nombres_apellidos = getNameAndLastName(name); // permite divir nombres y apellidos 

                    //console.log('Apellido: '+nombres_apellidos[0]);
                    //console.log('Nombres: '+nombres_apellidos[1]);

                    //var arrName     = name.split(" ");
                    var firstName   = nombres_apellidos[0];
                    var lastName    = nombres_apellidos[1];

                    if(response.success){
                       
                       isSuccess = true;
                       $("#carrito_comprador_nombres").parent().addClass("activo");                       
                       $("#carrito_comprador_nombres").val(lastName);
                       //$("#carrito_comprador_nombres").change();
                       $("#carrito_comprador_apellido_paterno").parent().addClass("activo");                                              
                       $("#carrito_comprador_apellido_paterno").val(firstName);    
                       //$("#carrito_comprador_apellido_paterno").change();                    
                    }
                    
                    //$('#loading-form-dni').css("visibility","hidden");                    
                  
                },
                error: function (error) {

                    
                  if( error.status == '403'){ // Su prueba gratuita o suscripción ha finalizado.
                      isSuccess = true;
                  }
                },
            });
        }
        //console.log(isSuccess);
        return isSuccess;

    }, "DNI no válido");
    // ---------------------------------------

    // validar documento de COMPROBANTE DE PAGO(DNI si es mayor a 700 soles o RUC) 
    // MOnooL1O7PEJJbx5sIXmqDEUk8O8spjEpohRccpwG3Ex5IjwX5wfkZXBviz8
    $.validator.addMethod("documentoCheck", function (value, element) {

        var isSuccess = false;
        //$('#loading-form-doc').css("visibility","visible");
        // Si esta vacio el valor del documento , Validar.
        if (value !== '') {

            // Pregunto si es Boleta o Factura.                
            if ($('input:radio[name=comprobante]:checked').val() == 'boleta') {
                if (value.length == 8) {
                    // Validar.DNI
                    $("#carrito_comprobante_nombres").val('');
                    $("#carrito_comprobante_apellido_paterno").val('');

                    $.ajax({
                        type: "post",
                        async: false, 
                        url: "https://api.migo.pe/api/v1/dni",
                        data: { dni: value , token:'MOnooL1O7PEJJbx5sIXmqDEUk8O8spjEpohRccpwG3Ex5IjwX5wfkZXBviz8'},                
                        success: function (response) {
                            console.log(response);
                            var name        = response.nombre;
                            var nombres_apellidos = getNameAndLastName(name); // permite divir nombres y apellidos 

                            //console.log('Apellido: '+nombres_apellidos[0]);
                            //console.log('Nombres: '+nombres_apellidos[1]);

                            //var arrName     = name.split(" ");
                            var firstName   = nombres_apellidos[0];
                            var lastName    = nombres_apellidos[1];
                            

                            if(response.success){
                               
                               isSuccess = true;
                               $("#carrito_comprobante_nombres").parent().addClass("activo");                       
                               $("#carrito_comprobante_nombres").val(lastName);
                               $("#carrito_comprobante_apellido_paterno").parent().addClass("activo");                                              
                               $("#carrito_comprobante_apellido_paterno").val(firstName);                        
                            }

                                //$('#loading-form-doc').css("visibility","hidden");
                        }
                    });


                }// End.if

            } else if ($('input:radio[name=comprobante]:checked').val() == 'factura') {

                if (value.length == 11) {
                    
                    // Validar.RUC
                    $('#carrito_comprobante_nombres').val('');                    
                    //$('#carrito_comprobante_direccion').val('');                    
                    //$('#loading-form-doc').css("visibility","visible");
                    $.ajax({
                        type: "post",
                        url: "https://api.migo.pe/api/v1/ruc",
                        async: false,
                        data: { ruc: value , token:'MOnooL1O7PEJJbx5sIXmqDEUk8O8spjEpohRccpwG3Ex5IjwX5wfkZXBviz8' },                
                        beforeSend: function () {
                          // $('#loading-form-doc').css("visibility","visible");
                           
                        },
                        success: function (response) {                            

                            if(response.success){

                                isSuccess = true;
                                $("#carrito_comprobante_nombres").parent().addClass("activo");
                                $('#carrito_comprobante_nombres').val(response.nombre_o_razon_social);
                                $("#carrito_comprobante_direccion").parent().addClass("activo");

                                console.log(response.direccion_simple.length);

                                if(response.direccion_simple.length > 3 ){
                                console.log('ENTRO ' + response.direccion_simple.length);
                                    $('#carrito_comprobante_direccion').val(response.direccion_simple);                                
                                }


                            }

                           // $('#loading-form-doc').css("visibility","hidden");                            
                          
                        },error: function (error) {
                              //console.log(error);
                            if( error.status == '403'){ // Su prueba gratuita o suscripción ha finalizado.
                                isSuccess = true;
                            }                              
                        },
                    });                    




                }// End.if
            }// else.
        }// end.value
        return isSuccess;
    }, "Documento no válido");
    // -----------------------
    $.validator.addMethod("gmaps_dir", function (value, element) {
        //$('#loading-form-dni').css("visibility","visible");
        let isSuccess = false;
        if (value.length !== '' && valid_dir == true && direction == value.trim()) {
			console.log(direction);
            isSuccess = true;
        }
        //$('#loading-form-dni').css("visibility","hidden");   
        return isSuccess;

    }, "direccion no válida");
    // ---------------------------------------

    

    $('.validar_carrito').on('change','input', function() {

        if( $('.validar_carrito').validate().checkForm()) {

               // $('#btn-pagar').attr('disabled', false);
                //$('#btn-pagar').removeClass('btn-agotado');        

            } else {

                //$('#btn-pagar').attr('disabled', true);
                //$('#btn-pagar').addClass('btn-agotado');      

        } 
    });

  
    
   
    
    var show_premsg = true;
    this.validateCarrito = function (url) {

        var validateForm = $(".validar_carrito");
        $(".validar_carrito").validate({
            onfocusout: false,           
            rules: {
                "comprador_nombres": {required: true, lettersonly: true, minlength: 3},
                "comprador_apellidos": {required: true, lettersonly: true, minlength: 3},
                "comprador_dni": {required: true, minlength: 8, maxlength: 8},
                //"comprador_dni": {dniCheck: true},
                "comprador_telefono": {required: true, minlength: 9, maxlength: 9, number: true},
                "comprador_email": {required: true, minlength: 11},
                "comprador_tipodoc":{required: true},
                "envio_nombres": {required: true, lettersonly: true, minlength: 3},
                "envio_apellidos": {required: true, lettersonly: true, minlength: 3},
                //"sel_local": {required: true},                
                
                //"datos_entrega_distrito": {required: true},
                //"envio_direccion": {required: true, minlength: 3, gmaps_dir: true},
                //"envio_referencia": {required: true, minlength: 3},
                "comprobante": {required: true},
                "comprobante_nombres": {required: false, minlength: 3},
                "comprobante_paterno": {required: false, minlength: 3},
                // "comprobante_materno": {required: true, minlength: 3},
                "comprobante_documento": {required: true, minlength: 8, maxlength: 8},
                "comprobante_documento": {documentoCheck: true},
                //"comprobante_documento_ruc": {required: true, minlength: 11, maxlength: 11},
                "comprobante_direccion": {required: false, minlength: 3},
                "comprobante_distrito": {required: false},
                "formas_p": {required: true},
                "politicas": {required: true},
                "publicidad": {required: false},
                //"envia_turno": {required: true},
                "comprobante_nombre_razon": {required: false, minlength: 3},
                "receta": {required: true, receta: true},
                "cuanto_pagas": {required: true, money: true},
				//"envio_nro_lote": {required: false}
            },
            messages: {
                "comprador_nombres": 'se requiere',
                "comprador_apellidos": {required: "", lettersonly: "", minlength: ""},
                "comprador_dni": {required: "", minlength: "", maxlength: ""},
                "comprador_telefono": {required: "", minlength: "", maxlength: "", number: ""},
                "comprador_email": {required: "", minlength: ""},
                "envio_nombres": {required: "", lettersonly: "", minlength: ""},
                "envio_apellidos": {required: "", lettersonly: "", minlength: ""},
                //"datos_entrega_distrito": {required: ""},
                //"envio_direccion": {required: "", minlength: "", gmaps_dir: ""},
                //"envio_referencia": {required: "", minlength: ""},
                "comprobante": {required: ""},
                "comprobante_nombres": {required: "", minlength: ""},
                "comprobante_paterno": {required: "", minlength: ""},
                //  "comprobante_materno": {required: "", minlength: ""},
                "comprobante_documento": {required: "", minlength: "", maxlength: ""},
                //"comprobante_documento_ruc": {required: "", minlength: "", maxlength: ""},
                "comprobante_direccion": {required: "", minlength: ""},
                "comprobante_distrito": {required: ""},
                "formas_p": {required: ""},
                "politicas": {required: ""},
                "envia_turno": {required: ""},
                "comprobante_nombre_razon": {required: "", minlength: ""},
                "receta": {required: "", receta: ""},
                "cuanto_pagas": {required: ""},
				//"envio_nro_lote": {required: ""}
            },
            invalidHandler: function(form, validator) {
                var errors = validator.numberOfInvalids();
                if (errors) {                    
                    validator.errorList[0].element.focus();
                }
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
                /*$("#btn-pagar").removeAttr("disabled");
                 $("#btn-pagar span").html("<strong>PAGAR</strong>");*/
            },
            unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
         
                
                /*if ($(element).attr("name") ==  "comprador_email") {
                 console.log("validar");
                 }*/

            },
            submitHandler: function(form){


                /*if(show_premsg){          
                 
                 $.fancybox('#olvidado_popup', {
                 type: 'inline',
                 padding: 0,
                 margin:0,
                 afterClose: function(){
                 show_premsg = false;
                 $("#carrito_formulario").submit();
                 // fancybox is closed, run myOtherFunct()
                 },
                 //afterShow: function(){
                 //    return false;
                 //  },
                 //modal: true,
                 //width:150,                                   
                 });
                 return false;
                 
                 }// end show premsg*/

                //const xxform = document.querySelector('#carrito_formulario');

                var formx = $(form);
                //var url = formx.attr('action');
                // var datos = formx.serializeArray();
                var form_data = new FormData(form);
                var loading = '<img style="width: 35px;" src="assets/gif/loading_white.gif">';
                $("#btn-pagar").attr("disabled", "disabled");
                $("#btn-pagar span").html(loading);



                $.ajax({
                    type: "post",
                    url: "carrito/validar",
                    data: form_data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    //async: tru,
                    beforeSend: function () {

                        /*$.fancybox.open('#loading', {
                            type: 'inline',
                            padding: 0,
                            margin: 0,
                            modal: true,
                            width: 150,
                        });*/
                       // $("#loading").html('<p class="precarga"><b></b><b></b><b></b><b></b><b></b></p>');
                       $.fancybox.open('<div id="loading"><p class="precarga"><b></b><b></b><b></b><b></b><b></b></p></div>',{
                            type: 'inline',
                            padding: 0,
                            margin: 0,
                            modal: true,
                            width: 150,
                        });
                
                    }
                }).done(function (rpta) {

                    $.fancybox.close();
                    /*
                     $('.disponibles').text('');   
                     if (msg.respuesta === "jm") {                        
                     procesarAjax(msg.respuestajm, {});                  
                     
                     } else if (typeof msg.sinstock != "undefined"){
                     eval(msg.respuesta);
                     var items = msg.sinstock;
                     for(key in items){
                     var element = items[key];
                     $("#prod_"+key+" .disponibles").text("Disponibles: "+element);                    
                     }
                     }else { 
                     //console.log("hola");                   
                     eval(msg.respuesta);                        
                     
                     }*/

                    //console.log(rpta);
                     //return false;

                    if (rpta.validado) {
                        if (rpta.url == 'tarjeta/pagar') {

                            window.setTimeout(function () {
                                cargaPopUpVisa(rpta.rpta_visa);
                            }, 200);
                        } else {
                            window.location.href = rpta.url;
                        }
                    } else {
                        window.setTimeout(function () {
                            eval(rpta.popup_msg)
                        }, 200);
                    }

                    /*$.fancybox('.premsg', {
                     type: 'inline',
                     padding: 0,
                     margin:0,
                     closeBtn: false,                        
                     afterClose: function(){
                     //show_premsg = false;
                     //$("#carrito_formulario").submit();
                     // fancybox is closed, run myOtherFunct()
                     //console.log(rpta);
                     
                     if(rpta.validado){
                     if(rpta.url == 'tarjeta/pagar'){
                     cargaPopUpVisa(rpta.rpta_visa);
                     }else{
                     window.location.href = rpta.url;                            
                     }
                     }else{
                     window.setTimeout( function(){ eval(rpta.popup_msg)}, 200); 
                     }
                     },
                     //afterShow: function(){
                     //    return false;
                     //  },
                     //modal: true,
                     //width:150,                                   
                     });*/

                    $("#btn-pagar").removeAttr("disabled");
                    $("#btn-pagar span").html("<strong>PAGAR</strong>");
                    /*if(rpta.validado){
                     if(rpta.url == 'tarjeta/pagar'){
                     cargaPopUpVisa(rpta.rpta_visa);
                     }else{
                     window.location.href = rpta.url;                            
                     }
                     }else{
                     eval(rpta.popup_msg);
                     }*/

                    //console.log(rpta);    
                            

                }).fail(function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR, textStatus, errorThrown);
                    return false;
                 });

                //show_premsg = true;

            }
        });
    };
    function procesarAjax(uri, datos) {
        $.ajax({
            type: "post",
            url: uri,
            data: datos,
            beforeSend: function () {

            }
        }).done(function (msg) {
            eval(msg.respuesta);
        });
    }
    /*validate productos*/this.validateProductos = function (url) {
        $(".validar_productos").validate({
            rules: {
                "numero": {required: true, minlength: 1, min: 1}
            },
            messages: {
                "numero": {required: "", minlength: "", min: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }
        });
    };
    /*validate paciente*/
    this.validatePaciente = function (url) {
        $(".validar_paciente").validate({
            rules: {
                "nombres": {required: true, minlength: 3},
                "dni": {required: true, minlength: 8, maxlength: 8},
                "telefono": {required: true, minlength: 7, number: true},
                "email": {required: true, minlength: 11},
                "adjuntar": {required: true},
                "mensaje": {required: true, minlength: 3},
                "politicas": {required: true}
            },
            messages: {
                "nombres": {required: "", minlength: ""},
                "dni": {required: "", minlength: "", maxlength: ""},
                "telefono": {required: "", minlength: "", number: ""},
                "email": {required: "", minlength: ""},
                "adjuntar": {required: ""},
                "mensaje": {required: "", minlength: ""},
                "politicas": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {

                $("#btn-enviar-paciente").attr('disabled', 'disabled');
                $("#btn-enviar-paciente > span").append('<img style="height:21px; margin-left: 5px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'paciente'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };
    /*validate especialista*/
    this.validateEspecialista = function (url) {
        $(".validar_especialista").validate({
            rules: {
                "nombres": {required: true, minlength: 3},
                "email": {required: true, minlength: 11},
                "dni": {required: true, minlength: 8, maxlength: 8},
                "telefono": {required: true, minlength: 7, number: true},
                "colegiatura": {required: true},
                "numero": {required: true, minlength: 3, number: true},
                "adjuntar": {required: true},
                "mensaje": {required: true, minlength: 3},
                "politicas": {required: true}
            },
            messages: {
                "nombres": {required: "", minlength: ""},
                "email": {required: "", minlength: ""},
                "dni": {required: "", minlength: "", maxlength: ""},
                "telefono": {required: "", minlength: "", number: ""},
                "colegiatura": {required: ""},
                "numero": {required: "", minlength: "", number: ""},
                "adjuntar": {required: ""},
                "mensaje": {required: "", minlength: ""},
                "politicas": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {

                $("#btn-enviar-especialistas").attr('disabled', 'disabled');
                $("#btn-enviar-especialistas > span").append('<img style="height:21px; margin-left: 5px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'especialista'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };
    /*validate copromiso*/
    this.validateCompromiso = function (url) {
        $(".validar_compromiso").validate({
            rules: {
                "empresa": {required: true, minlength: 3},
                "rubro": {required: true, minlength: 3},
                "ruc": {required: true, minlength: 11, maxlength: 11, number: true},
                "telefono": {required: true, minlength: 7, number: true},
                "email": {required: true, minlength: 11},
                "mensaje": {required: true, minlength: 3},
                "politicas": {required: true}
            },
            messages: {
                "empresa": {required: "", minlength: ""},
                "rubro": {required: "", minlength: ""},
                "ruc": {required: "", minlength: "", maxlength: "", number: ""},
                "telefono": {required: "", minlength: "", number: ""},
                "email": {required: "", minlength: ""},
                "mensaje": {required: "", minlength: ""},
                "politicas": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {

                $("#btn-enviar-compromiso").attr('disabled', 'disabled');
                $("#btn-enviar-compromiso > span").append('<img style="height:21px; margin-left: 8px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'compromiso'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };
    /*validate trabaja*/
    this.validateTrabaja = function (url) {
        $(".validar_trabaja").validate({
            rules: {
                "nombres": {required: true, minlength: 3},
                "email": {required: true, minlength: 11},
                "telefono": {required: true, minlength: 7, number: true},
                "puesto": {required: true, minlength: 3},
                "adjuntar": {required: true},
                "mensaje": {required: true, minlength: 3},
                "politicas": {required: true}
            },
            messages: {
                "nombres": {required: "", minlength: ""},
                "email": {required: "", minlength: ""},
                "telefono": {required: "", minlength: "", number: ""},
                "puesto": {required: "", minlength: ""},
                "adjuntar": {required: ""},
                "mensaje": {required: "", minlength: ""},
                "politicas": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {

                $("#btn-enviar-trabaja").attr('disabled', 'disabled');
                $("#btn-enviar-trabaja > span").append('<img style="height:21px; margin-left: 8px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'trabaja'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                });

            }
        });
    };
    /*validate contactanos*/
    this.validateContactanos = function (url) {
        $(".validar_contactanos").validate({
            rules: {
                "nombres": {required: true, lettersonly: true, minlength: 3},
                "email": {required: true, minlength: 11},
                "telefono": {required: true, minlength: 7, number: true},
                "mensaje": {required: true, minlength: 3},
                "politicas": {required: true},
                "chk_recaptcha": {required: true}
            },
            messages: {
                "nombres": {required: "", lettersonly: "", minlength: ""},
                "email": {required: "", minlength: ""},
                "telefono": {required: "", minlength: "", number: ""},
                "mensaje": {required: "", minlength: ""},
                "politicas": {required: ""},
                "chk_recaptcha": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            },
            submitHandler: function (form) {

                $("#btn-enviar-contactanos").attr('disabled', 'disabled');
                $("#btn-enviar-contactanos > span").append('<img style="height:21px; margin-left: 5px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                form.submit();
                /*grecaptcha.ready(function() {
                 grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'contactanos'}).then(function(token) {
                 formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                 $.post("formulario/validarCaptcha",{token: token}, function(result) {
                 console.log(result);
                 if(result.success) {                            
                 form.submit(); 
                 } else {                                            
                 alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                 }
                 });
                 });
                 });*/

            }
        });
    };
    /*validate libro*/
    this.validateLibro = function (url) {
        $(".validar_libro").validate({
            rules: {
                "localatencion": {required: true},
                "origencompra": {required: true},                
                "informacion_nombres": {required: false, minlength: 2},
                "informacion_apellidos": {required: false, minlength: 2},
                "informacion_dni": {required: false, minlength: 8, maxlength: 8, number: true},
                "informacion_telefono": {required: false, minlength: 7, maxlength: 9, number: true},
                "informacion_email": {required: false, minlength: 11, email: true},
                "informacion_direccion": {required: false, minlength: 5},
                "informacion_padre": {required: false, minlength: 2},
                "informacion_padredni": {required: false, minlength: 8, maxlength: 8, number: true},
                "informacion_padretelefono": {required: false, minlength: 7, maxlength: 9, number: true},
                "informacion_padreemail": {required: false, minlength: 11},
                "informacion_padredireccion": {required: false, minlength: 5},
                //"informacion_padre": {required: true, minlength: 3},
                // "informacion_padredni": {required: true, minlength: 8, maxlength: 8, number: true},
                //"informacion_tienda": {required: true, minlength: 3},
                "identificacion": {required: false},
                "informacion_montoproducto": {required: false, maxlength: 9, number: true},
                "identificacion_detalle": {required: false, minlength: 3},
                "detalle": {required: false},
                "detalle_incidente": {required: false, minlength: 3},
                "detalle_cliente": {required: false, minlength: 3}
                //"politicas": {required: false},
//                "chk_recaptcha": {required: true}
            },
            messages: {
                "localatencion": {required: ""},
                "informacion_email": {required: "", minlength: "", email: "Ingrese un formato de correo válido."},                
                "informacion_nombres": {required: "", minlength: ""},
                "informacion_apellidos": {required: "", minlength: ""},
                "informacion_dni": {required: "", minlength: "", maxlength: "", number: ""},
                "informacion_telefono": {required: "", minlength: "", maxlength: "", number: ""},
                "informacion_email": {required: "", minlength: "", email: "Ingrese un formato de correo válido."},
                "informacion_direccion": {required: "", minlength: ""},
                "informacion_padre": {required: "", minlength: ""},
                "informacion_padredni": {required: "", minlength: "", maxlength: "", number: ""},
                "informacion_padretelefono": {required: "", minlength: "", maxlength: "", number: ""},
                "informacion_padreemail": {required: "", minlength: ""},
                "informacion_padredireccion": {required: "", minlength: ""},
                // "informacion_padre": {required: "", minlength: ""},
                //"informacion_padredni": {required: "", minlength: "", maxlength: "", number: ""},
                // "informacion_tienda": {required: "", minlength: ""},
                "identificacion": {required: ""},
                "informacion_montoproducto": {required: "", maxlength: "", number: ""},
                "identificacion_detalle": {required: "", minlength: ""},
                "detalle": {required: ""},
                "detalle_incidente": {required: "", minlength: ""},
                "detalle_cliente": {required: "", minlength: ""}
                //"politicas": {required: ""},
               // "chk_recaptcha": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            },
            submitHandler: function (form) {

                $("#btn-enviar-libro").attr('disabled', 'disabled');
                $("#btn-imprimir-libro").attr('disabled', 'disabled');
                $("#btn-enviar-libro > span").append('<img style="height:21px; margin-left: 8px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                form.submit();
                /*grecaptcha.ready(function() {
                 grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'libro_reclamaciones'}).then(function(token) {
                 formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                 $.post("formulario/validarCaptcha",{token: token}, function(result) {
                 console.log(result);
                 if(result.success) {                            
                 form.submit(); 
                 } else {                                            
                 alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                 }
                 });
                 });
                 });*/


                

            }
        });
    };

    /*validate denuncias*/
    this.validateDenuncias = function (url) {
        $(".validar_denuncias").validate({
            rules: {
                "informacion_nombres": {required: true, minlength: 3},
                "informacion_telefono": {required: true, minlength: 7, number: true},
                "informacion_email": {required: true, minlength: 11},
                "informacion_denunciado": {required: true, minlength: 3},
                "informacion_actodenunciado": {required: true, dateFormat: true},
                "informacion_reporte": {required: true, minlength: 3},
                "informacion_dependencia": {required: true, minlength: 3},
                "adjuntar": {required: true},
                "identificacion_detalle": {required: true, minlength: 3},
                "politicas": {required: true},
                "chk_recaptcha": {required: true}

            },
            messages: {
                "informacion_nombres": {required: "", minlength: ""},
                "informacion_telefono": {required: "", minlength: ""},
                "informacion_email": {required: "", minlength: ""},
                "informacion_denunciado": {required: "", minlength: ""},
                "informacion_actodenunciado": {required: ""},
                "informacion_reporte": {required: "", minlength: ""},
                "informacion_dependencia": {required: "", minlength: ""},
                "adjuntar": {required: ""},
                "identificacion_detalle": {required: "", minlength: ""},
                "politicas": {required: ""},
                "chk_recaptcha": {required: ""}
            },
            highlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(validClass).addClass(errorClass);
            }, unhighlight: function (element, errorClass, validClass) {
                errorClass = "has-error has-feedback";
                validClass = "has-success has-feedback";
                $(element).parents(".form").removeClass(errorClass).addClass(validClass);
            }, submitHandler: function (form) {
                $("#btn-enviar-denuncia").attr('disabled', 'disabled');
                $("#btn-enviar-denuncia > span").append('<img style="height:21px; margin-left: 8px;" src="assets/gif/loading.gif">');

                var formx = $(form);
                grecaptcha.ready(function () {
                    
                    $("#btn-enviar-denuncia").attr('disabled', 'disabled');
                    $("#btn-enviar-denuncia > span").append('<img style="height:21px; margin-left: 5px;" src="assets/gif/loading.gif">');
    
                    var formx = $(form);
                    form.submit();
                      
                    
                    /*
                    grecaptcha.execute('6LfEPqsUAAAAAJGG9Fdt-X7F8YX3_FvI-Sp003JB', {action: 'denuncias'}).then(function (token) {
                        formx.prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                        $.post("formulario/validarCaptcha", {token: token}, function (result) {
                            //console.log(result);
                            if (result.success) {
                                form.submit();
                            } else {
                                alert('Intento de Spammer: lo sentimos, nuestros algoritmos han detectado un posible intento de spammer.');
                            }
                        });
                    });
                    */
                });

            }
        });
    };
    /*iniciar*/
    this.init = function () {
        this.ricoImg();
        this.rodarGatillo();
        this.rodarAchicar();
        this.pataAcordion();
        this.pataAncla();
        this.campoRotulo();
        this.placeholderForm();
        this.malihuBarra();
        this.validateRegistro();
        this.validateSesion();
    };
	
    /*if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
     console.log('firefox');
     } else {
     console.log('chrome');
     }*/
    return this.init();
}
// Author: Jogis
// Website: http://imagescroll.qiniudn.com/test1.html
// Plugin Website: https://github.com/yesvods/jquery-ImageScroll
(function ($) {
    $.fn.imageScroll = function (opts) {
        var defaults = {
            orientation: "left",
            speed: 2000,
            interval: 5000,
            hoverPause: true,
            callback: function () {
                return true;
            }
        }
        var options = $.extend(defaults, opts);
        var _this = this;
        function scroll() {
            var $firstLi = $(_this).children().first();
            var $lastLi = $(_this).children().last();
            var liOuterWidth = $firstLi.outerWidth(true);
            //In case that parent take a center text-algin layout
            if ($(_this).parent().css("text-align").toLowerCase() == "center") {
                liOuterWidth *= 2;
            }
            //console.log();
            switch (options.orientation) {
                case "left":
                case "top":
                    $firstLi.animate({
                        "margin-left": "-=" + liOuterWidth + "px"
                    }, options.speed, function () {
                        $firstLi.css("margin-left", "+=" + liOuterWidth + "px");
                        $lastLi.after($firstLi);
                    });
                    break;
                case "right":
                case "bottom":
                    $firstLi.animate({
                        "margin-left": "+=" + liOuterWidth + "px"
                    }, options.speed, function () {
                        $firstLi.css("margin-left", "-=" + liOuterWidth + "px");
                        $firstLi.before($lastLi);
                    });
                    break;
            }
            //binding this to callback action scope link which make coding native
            options.callback.call(_this);
        }
        var scrollInterval = setInterval(scroll, options.interval);
        //setting the hover motion
        if (options.hoverPause) {
            $(this).hover(function () {
                clearInterval(scrollInterval);
            }, function () {
                scrollInterval = setInterval(scroll, options.interval);
            });
        }
        return this;
    }
})(window.jQuery || window.Zepto);

function getNameAndLastName(str) {

  var tokens = str.split(' ');

  // Arreglo donde se guardan las palabras del nombre.
  var names = new Array();

  // Palabras de apellidos y nombres compuestos
  const special_tokens = new Array('da','de','del','la', 'las','los','mac','mc','van','von','y','i','san','santa');

  var prev = "";

  tokens.forEach(token =>{
    var _token = token.toLowerCase();
    if(special_tokens.includes(_token)){
      prev = `${prev}${firstLetterUpperCase(_token)} `;
    }else{
      names.push(`${prev}${firstLetterUpperCase(_token)}`);
      prev = "";
    }
  });

  var num_nombres = names.length;

  var nombres = "",
      apellidos = "";

  switch (num_nombres){
    case 0:
      nombres = '';
      break;
    case 1:
      nombres = names[0];
      break;
    case 2:
      nombres = names[0];
      apellidos = names[1];
      break;
    case 3:
      nombres = names[0];
      apellidos = `${names[1]} ${names[2]}`;
      break;
    case 4:
      nombres = `${names[0]} ${names[1]}`;
      apellidos = `${names[2]} ${names[3]}`;
      break;
    default:
      nombres = `${names[0]} ${names[1]}`;
      names.splice(0,2);
      apellidos = names.join(" ");
      break;
  }


   return [nombres, apellidos];
}


/* Funciones auxiliares */
function firstLetterUpperCase(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}