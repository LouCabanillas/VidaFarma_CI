package com.cibertec.vidafarma.services.impl;

import com.cibertec.vidafarma.entity.VentaEntity;
import com.cibertec.vidafarma.repository.VentaRepository;
import com.cibertec.vidafarma.services.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VentaServiceImpl implements VentaService {

	@Autowired
    VentaRepository repository;

    @Override
    public Long crear(VentaEntity o) {
        VentaEntity obj = repository.save(o);
        return obj.getIdVenta();
    }

    @Override
    public VentaEntity buscar(long id) {
        return repository.findById(id)
                .orElse(new VentaEntity());
    }

    @Override
    public VentaEntity actualizar(VentaEntity o) {
        return repository.save(o);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<VentaEntity> listar() {
        return repository.findAll();
    }
}