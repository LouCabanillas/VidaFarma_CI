package com.cibertec.vidafarma.services;

import com.cibertec.vidafarma.entity.EmpleadoEntity;

import java.util.List;

public interface EmpleadoService {
	
	Long crear(EmpleadoEntity o);
	EmpleadoEntity buscar(long id);
	EmpleadoEntity actualizar(EmpleadoEntity o);
	void eliminar(Long id);
	List<EmpleadoEntity> listar();
	
}
