package com.cibertec.vidafarma.services.impl;

import com.cibertec.vidafarma.entity.DetalleVentaEntity;
import com.cibertec.vidafarma.repository.DetalleVentaRepository;
import com.cibertec.vidafarma.services.DetalleVentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DetalleVentaServiceImpl implements DetalleVentaService {

	@Autowired
    DetalleVentaRepository repository;

    @Override
    public Long crear(DetalleVentaEntity o) {
        DetalleVentaEntity obj = repository.save(o);
        return obj.getIdDetalleVenta();
    }

    @Override
    public DetalleVentaEntity buscar(long id) {
        return repository.findById(id)
                .orElse(new DetalleVentaEntity());
    }

    @Override
    public DetalleVentaEntity actualizar(DetalleVentaEntity o) {
        return repository.save(o);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<DetalleVentaEntity> listar() {
        return repository.findAll();
    }
}