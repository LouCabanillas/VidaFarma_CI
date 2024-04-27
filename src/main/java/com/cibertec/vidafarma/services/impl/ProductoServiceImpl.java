package com.cibertec.vidafarma.services.impl;

import com.cibertec.vidafarma.entity.ProductoEntity;
import com.cibertec.vidafarma.repository.ProductoRepository;
import com.cibertec.vidafarma.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {

	@Autowired
    ProductoRepository repository;

    private static int STOCK_MINIMO = 0;

    @Override
    public Long crear(ProductoEntity o) {
        ProductoEntity obj = repository.save(o);
        return obj.getIdProducto();
    }

    @Override
    public ProductoEntity buscar(long id) {
        return repository.findById(id)
                .orElse(new ProductoEntity());
    }

    @Override
    public ProductoEntity actualizar(ProductoEntity o) {
        return repository.save(o);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<ProductoEntity> listar() {
        return repository.findAll();
    }

    @Override
    public List<ProductoEntity> listarMedicamentos() {
        return repository.findByTipoAndStockGreaterThan("Medicamentos", STOCK_MINIMO);
    }

    @Override
    public List<ProductoEntity> listarCuidadoPersonal() {
        return repository.findByTipoAndStockGreaterThan("Cuidado Personal", STOCK_MINIMO);
    }

    @Override
    public List<ProductoEntity> listarCuidadoHogar() {
        return repository.findByTipoAndStockGreaterThan("Cuidado del Hogar", STOCK_MINIMO);
    }

    @Override
    public ProductoEntity buscarMedicamento(String medicamento) {
        return repository.findByNombreAndStockGreaterThan(medicamento, STOCK_MINIMO);
    }

}