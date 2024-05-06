package com.cibertec.vidafarma.rest;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.entity.DetalleVentaEntity;
import com.cibertec.vidafarma.entity.ProductoEntity;
import com.cibertec.vidafarma.enums.Role;
import com.cibertec.vidafarma.services.ClienteService;
import com.cibertec.vidafarma.services.DetalleVentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/detalleventa")
public class DetalleVentaRestController {

    @Autowired
    DetalleVentaService service;


    @GetMapping("/buscarPorNombres/{nombre}/{paterno}/{materno}")
    public List<DetalleVentaEntity> buscarPorNombres(
            @PathVariable String nombre,
            @PathVariable String paterno,
            @PathVariable String materno) {
        return service.buscarPorNombresCliente(nombre, paterno, materno);
    }

    @GetMapping("/buscarPorCorreo/{correo}")
    public List<DetalleVentaEntity> buscarPorCorreo(
            @PathVariable String correo) {
        return service.buscarPorCorreo(correo);
    }

}
