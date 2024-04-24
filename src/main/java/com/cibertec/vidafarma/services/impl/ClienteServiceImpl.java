package com.cibertec.vidafarma.services.impl;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.repository.ClienteRepository;
import com.cibertec.vidafarma.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {

	@Autowired
    ClienteRepository repository;

    @Override
    public Long crear(ClienteEntity o) {
        ClienteEntity obj = repository.save(o);
        return obj.getIdCliente();
    }

    @Override
    public ClienteEntity buscar(long id) {
        return repository.findById(id)
                .orElse(new ClienteEntity());
    }

    @Override
    public ClienteEntity actualizar(ClienteEntity o) {
        return repository.save(o);
    }

    @Override
    public void eliminar(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<ClienteEntity> listar() {
        return repository.findAll();
    }
}