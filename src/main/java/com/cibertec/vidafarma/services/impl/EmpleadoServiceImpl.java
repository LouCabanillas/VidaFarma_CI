package com.cibertec.vidafarma.services.impl;

import com.cibertec.vidafarma.entity.EmpleadoEntity;
import com.cibertec.vidafarma.repository.EmpleadoRepository;
import com.cibertec.vidafarma.services.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmpleadoServiceImpl implements EmpleadoService {

	@Autowired
    EmpleadoRepository repository;

    @Override
    public Long crear(EmpleadoEntity o) {
        EmpleadoEntity obj = repository.save(o);
        return obj.getIdEmpleado();
    }

    @Override
    public EmpleadoEntity buscar(long id) {
        return repository.findById(id)
                .orElse(new EmpleadoEntity());
    }

    @Override
    public EmpleadoEntity actualizar(EmpleadoEntity o) {
        return repository.save(o);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<EmpleadoEntity> listar() {
        return repository.findAll();
    }
}