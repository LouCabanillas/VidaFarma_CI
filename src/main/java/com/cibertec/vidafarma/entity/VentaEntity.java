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
@Table(name = "venta")
public class VentaEntity {

	@Id
	@Column(name = "idVenta")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idVenta;

	@ManyToOne
	@JoinColumn(name = "idCliente")
	private ClienteEntity cliente;

	@ManyToOne
	@JoinColumn(name = "idEmpleado")
	private EmpleadoEntity empleado;

	@Column(name = "fecha")
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	private Date fecha;

}
