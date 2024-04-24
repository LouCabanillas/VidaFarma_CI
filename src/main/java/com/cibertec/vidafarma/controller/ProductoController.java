package com.cibertec.vidafarma.controller;

import com.cibertec.vidafarma.entity.ProductoEntity;
import com.cibertec.vidafarma.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/productos")
public class ProductoController {

	@Autowired
	ProductoService service;

	@GetMapping()
	public String listar(Model model) {
		model.addAttribute("productos", service.listar());
		return "producto/productos";
	}

	@GetMapping("/nuevo")
	public String crear(Model model) {
		model.addAttribute("producto", new ProductoEntity());
		return "producto/nuevo";
	}

	@PostMapping("/insert")
	public String procesarCrear(@Validated ProductoEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "producto/nuevo";
		}
		service.crear(objeto);
		return "redirect:/productos";
	}
	
	@GetMapping("/get/{id}")
	public String actualizar(@PathVariable("id") Long id,Model model) {
		model.addAttribute("producto", service.buscar(id));
		return "producto/actualizar";
	}
	
	@PostMapping("/update")
	public String procesarActualizar(@Validated ProductoEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "producto/actualizar";
		}
		service.actualizar(objeto);
		return "redirect:/productos";
	}
	
	@GetMapping("/delete")
	public String eliminar(@RequestParam("id") Long id) {
		service.eliminar(id);
		return "redirect:/productos";
	}
}
