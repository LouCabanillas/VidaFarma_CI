package com.cibertec.vidafarma.controller;

import com.cibertec.vidafarma.entity.DetalleVentaEntity;
import com.cibertec.vidafarma.services.DetalleVentaService;
import com.cibertec.vidafarma.services.ProductoService;
import com.cibertec.vidafarma.services.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/detalleVentas")
public class DetalleVentaController {

	@Autowired
	DetalleVentaService service;

	@Autowired
	VentaService ventaService;

	@Autowired
	ProductoService productoService;

	@GetMapping()
	public String listar(Model model) {
		model.addAttribute("detalleVentas", service.listar());
		model.addAttribute("ventas", ventaService.listar());
		model.addAttribute("productos", productoService.listar());
		return "detalleVenta/detalleVentas";
	}

	@GetMapping("/nuevo")
	public String crear(Model model) {
		model.addAttribute("detalleVenta", new DetalleVentaEntity());
		model.addAttribute("ventas", ventaService.listar());
		model.addAttribute("productos", productoService.listar());
		return "detalleVenta/nuevo";
	}

	@PostMapping("/insert")
	public String procesarCrear(@Validated DetalleVentaEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("ventas", ventaService.listar());
			model.addAttribute("productos", productoService.listar());
			return "detalleVenta/nuevo";
		}
		service.crear(objeto);
		return "redirect:/detalleVentas";
	}
	
	@GetMapping("/get/{id}")
	public String actualizar(@PathVariable("id") Long id,Model model) {
		model.addAttribute("detalleVenta", service.buscar(id));
		model.addAttribute("ventas", ventaService.listar());
		model.addAttribute("productos", productoService.listar());
		return "detalleVenta/actualizar";
	}
	
	@PostMapping("/update")
	public String procesarActualizar(@Validated DetalleVentaEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("ventas", ventaService.listar());
			model.addAttribute("productos", productoService.listar());
			return "detalleVenta/actualizar";
		}
		service.actualizar(objeto);
		return "redirect:/detalleVentas";
	}
	
	@GetMapping("/delete")
	public String eliminar(@RequestParam("id") Long id) {
		service.eliminar(id);
		return "redirect:/detalleVentas";
	}
}
