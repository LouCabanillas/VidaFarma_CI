package com.cibertec.vidafarma.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cliente")
public class ClienteEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCliente")
    private Long idCliente;

    @Column(name = "dniCliente")
    private String dniCliente;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apePaterno")
    private String apePaterno;

    @Column(name = "apeMaterno")
    private String apeMaterno;

    @Column(name = "fechaNacimiento")
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date fechaNacimiento;

    @Column(name = "correo")
    private String correo;

    @Column(name = "celular")
    private String celular;

}
