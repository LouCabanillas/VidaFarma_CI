package com.cibertec.vidafarma.services;

import com.cibertec.vidafarma.entity.ClienteEntity;

import java.util.List;

public interface ClienteService {
	
	Long crear(ClienteEntity o);
	ClienteEntity buscar(long id);
	ClienteEntity actualizar(ClienteEntity o);
	void eliminar(Long id);
	List<ClienteEntity> listar();
	
}
