package com.cibertec.vidafarma.controller;

import com.cibertec.vidafarma.entity.VentaEntity;
import com.cibertec.vidafarma.services.ClienteService;
import com.cibertec.vidafarma.services.EmpleadoService;
import com.cibertec.vidafarma.services.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ventas")
public class VentaController {

	@Autowired
	VentaService service;

	@Autowired
	ClienteService clienteService;

	@Autowired
	EmpleadoService empleadoService;

	@GetMapping()
	public String listar(Model model) {
		model.addAttribute("ventas", service.listar());
		model.addAttribute("clientes", clienteService.listar());
		model.addAttribute("empleados", empleadoService.listar());
		return "venta/ventas";
	}

	@GetMapping("/nuevo")
	public String crear(Model model) {
		model.addAttribute("venta", new VentaEntity());
		model.addAttribute("clientes", clienteService.listar());
		model.addAttribute("empleados", empleadoService.listar());
		return "venta/nuevo";
	}

	@PostMapping("/insert")
	public String procesarCrear(@Validated VentaEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("clientes", clienteService.listar());
			model.addAttribute("empleados", empleadoService.listar());
			return "venta/nuevo";
		}
		service.crear(objeto);
		return "redirect:/ventas";
	}
	
	@GetMapping("/get/{id}")
	public String actualizar(@PathVariable("id") Long id,Model model) {
		model.addAttribute("venta", service.buscar(id));
		model.addAttribute("clientes", clienteService.listar());
		model.addAttribute("empleados", empleadoService.listar());
		return "venta/actualizar";
	}
	
	@PostMapping("/update")
	public String procesarActualizar(@Validated VentaEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			model.addAttribute("clientes", clienteService.listar());
			model.addAttribute("empleados", empleadoService.listar());
			return "venta/actualizar";
		}
		service.actualizar(objeto);
		return "redirect:/ventas";
	}
	
	@GetMapping("/delete")
	public String eliminar(@RequestParam("id") Long id) {
		service.eliminar(id);
		return "redirect:/ventas";
	}
}
