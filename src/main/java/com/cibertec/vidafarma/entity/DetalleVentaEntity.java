package com.cibertec.vidafarma.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "detalleVenta")
public class DetalleVentaEntity {

	@Id
	@Column(name = "idDetalleVenta")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDetalleVenta;

	@ManyToOne
	@JoinColumn(name = "idVenta")
	private VentaEntity venta;

	@ManyToOne
	@JoinColumn(name = "idProducto")
	private ProductoEntity producto;

	@Column(name = "cantidad")
	private int cantidad;

	
}
