package com.cibertec.vidafarma.services;

import com.cibertec.vidafarma.entity.VentaEntity;

import java.util.List;

public interface VentaService {
	
	Long crear(VentaEntity o);
	VentaEntity buscar(long id);
	VentaEntity actualizar(VentaEntity o);
	void eliminar(Long id);
	List<VentaEntity> listar();
	
}
