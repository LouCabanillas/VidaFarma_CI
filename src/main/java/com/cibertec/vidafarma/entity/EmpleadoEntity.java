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
@Table(name = "empleado")
public class EmpleadoEntity {

    @Id
    @Column(name = "idEmpleado")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idEmpleado;

    @Column(name = "dniEmpleado")
    private String dniEmpleado;

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
