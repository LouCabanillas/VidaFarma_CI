package com.cibertec.vidafarma.controller;

import com.cibertec.vidafarma.entity.EmpleadoEntity;
import com.cibertec.vidafarma.services.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/empleados")
public class EmpleadoController {

	@Autowired
	EmpleadoService service;

	@GetMapping()
	public String listar(Model model) {
		model.addAttribute("empleados", service.listar());
		return "empleado/empleados";
	}

	@GetMapping("/nuevo")
	public String crear(Model model) {
		model.addAttribute("empleado", new EmpleadoEntity());
		return "empleado/nuevo";
	}

	@PostMapping("/insert")
	public String procesarCrear(@Validated EmpleadoEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "empleado/nuevo";
		}
		service.crear(objeto);
		return "redirect:/empleados";
	}
	
	@GetMapping("/get/{id}")
	public String actualizar(@PathVariable("id") Long id,Model model) {
		model.addAttribute("empleado", service.buscar(id));
		return "empleado/actualizar";
	}
	
	@PostMapping("/update")
	public String procesarActualizar(@Validated EmpleadoEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "empleado/actualizar";
		}
		service.actualizar(objeto);
		return "redirect:/empleados";
	}
	
	@GetMapping("/delete")
	public String eliminar(@RequestParam("id") Long id) {
		service.eliminar(id);
		return "redirect:/empleados";
	}
}
