package com.cibertec.vidafarma.rest;

import com.cibertec.vidafarma.entity.ProductoEntity;
import com.cibertec.vidafarma.services.ProductoService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

}
