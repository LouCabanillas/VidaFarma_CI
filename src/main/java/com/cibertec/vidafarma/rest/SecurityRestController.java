package com.cibertec.vidafarma.rest;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.entity.ProductoEntity;
import com.cibertec.vidafarma.enums.Role;
import com.cibertec.vidafarma.services.ClienteService;
import com.cibertec.vidafarma.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/security")
public class SecurityRestController {

    @Autowired
    ClienteService service;


    @PostMapping("/registrar")
    public Long registrar(@RequestBody ClienteEntity cliente) {
        cliente.setRole(Role.USER);
        return service.crear(cliente);
    }

}
