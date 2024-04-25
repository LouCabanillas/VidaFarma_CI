package com.cibertec.vidafarma.repository;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.entity.EmpleadoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteEntity, Long> {

    ClienteEntity findByUsername(String username);

}
