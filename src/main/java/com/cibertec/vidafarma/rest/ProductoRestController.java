package com.cibertec.vidafarma.rest;

import com.cibertec.vidafarma.entity.ProductoEntity;
import com.cibertec.vidafarma.services.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/producto")
public class ProductoRestController {

    @Autowired
    ProductoService service;

    @GetMapping
    public List<ProductoEntity> getAll() {
        return service.listar();
    }

    @GetMapping("/listarMedicamentos")
    public List<ProductoEntity> listarMedicamentos() {
        return service.listarMedicamentos();
    }

    @GetMapping("/listarCuidadoPersonal")
    public List<ProductoEntity> listarCuidadoPersonal() {
        return service.listarCuidadoPersonal();
    }

    @GetMapping("/listarCuidadoDelHogar")
    public List<ProductoEntity> listarCuidadoDelHogar() {
        return service.listarCuidadoHogar();
    }

    @GetMapping("/buscarProductoPorNombre/{nombre}")
    public ProductoEntity buscarProductoPorNombre(@PathVariable String nombre) {
        return service.buscarProductoPorNombre(nombre);
    }

}
