package com.cibertec.vidafarma.controller;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/clientes")
public class ClienteController{

	@Autowired
	ClienteService service;

	@GetMapping()
	public String listar(Model model) {
		model.addAttribute("clientes", service.listar());
		return "cliente/clientes";
	}

	@GetMapping("/nuevo")
	public String crear(Model model) {
		model.addAttribute("cliente", new ClienteEntity());
		return "cliente/nuevo";
	}

	@PostMapping("/insert")
	public String procesarCrear(@Validated ClienteEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "cliente/nuevo";
		}
		service.crear(objeto);
		return "redirect:/clientes";
	}
	
	@GetMapping("/get/{id}")
	public String actualizar(@PathVariable("id") Long id,Model model) {
		model.addAttribute("cliente", service.buscar(id));
		return "cliente/actualizar";
	}
	
	@PostMapping("/update")
	public String procesarActualizar(@Validated ClienteEntity objeto, BindingResult result, Model model) {
		if (result.hasErrors()) {
			return "cliente/actualizar";
		}
		service.actualizar(objeto);
		return "redirect:/clientes";
	}
	
	@GetMapping("/delete")
	public String eliminar(@RequestParam("id") Long id) {
		service.eliminar(id);
		return "redirect:/clientes";
	}
}
