package com.cibertec.vidafarma.services.impl;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.repository.ClienteRepository;
import com.cibertec.vidafarma.services.ClienteService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteServiceImpl implements ClienteService {

	@Autowired
    ClienteRepository repository;

    @Override
    public Long crear(ClienteEntity o) {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(o.getPassword());
        o.setPassword(encodedPassword);
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
        ClienteEntity cliente = buscar(o.getIdCliente());
        if(StringUtils.isEmpty(o.getPassword())){
            o.setPassword(cliente.getPassword());
        } else {
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            String encodedPassword = passwordEncoder.encode(o.getPassword());
            o.setPassword(encodedPassword);
        }
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