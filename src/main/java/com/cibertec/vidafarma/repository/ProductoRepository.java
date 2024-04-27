package com.cibertec.vidafarma.repository;

import com.cibertec.vidafarma.entity.ProductoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepository extends JpaRepository<ProductoEntity, Long> {

    List<ProductoEntity> findByTipo(String tipo);
    List<ProductoEntity> findByTipoAndStockGreaterThan(String tipo, int stock);
    ProductoEntity findByNombreAndStockGreaterThan(String tipo, int stock);
    List<ProductoEntity> findByNombreContainingAndStockGreaterThan(String fragmento, int stock);

}
