package com.cibertec.vidafarma.repository;

import com.cibertec.vidafarma.entity.DetalleVentaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DetalleVentaRepository extends JpaRepository<DetalleVentaEntity, Long> {

    List<DetalleVentaEntity> findByVentaClienteNombreAndVentaClienteApePaternoAndVentaClienteApeMaterno(
            String nombre, String apePaterno, String apeMaterno);

    List<DetalleVentaEntity> findByVentaClienteCorreo(String correo);

}
