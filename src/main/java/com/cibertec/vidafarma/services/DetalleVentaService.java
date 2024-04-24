package com.cibertec.vidafarma.services;

import com.cibertec.vidafarma.entity.DetalleVentaEntity;
import java.util.List;

public interface DetalleVentaService {
	
	Long crear(DetalleVentaEntity o);
	DetalleVentaEntity buscar(long id);
	DetalleVentaEntity actualizar(DetalleVentaEntity o);
	void eliminar(Long id);
	List<DetalleVentaEntity> listar();
	
}
