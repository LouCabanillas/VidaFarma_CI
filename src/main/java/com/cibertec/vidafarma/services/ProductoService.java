package com.cibertec.vidafarma.services;

import com.cibertec.vidafarma.entity.ProductoEntity;

import java.util.List;

public interface ProductoService {
	
	Long crear(ProductoEntity o);
	ProductoEntity buscar(long id);
	ProductoEntity actualizar(ProductoEntity o);
	void eliminar(Long id);
	List<ProductoEntity> listar();
	List<ProductoEntity> listarMedicamentos();
	List<ProductoEntity> listarCuidadoPersonal();
	List<ProductoEntity> listarCuidadoHogar();
	ProductoEntity buscarProductoPorNombre(String nombre);

	List<ProductoEntity> buscarProductoPorFramentoNombre(String fragmento);
}
