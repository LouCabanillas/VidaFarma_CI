package com.cibertec.vidafarma.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/ayuda")
public class AyudaController{

	@GetMapping()
	public String listarCliente(Model model) {
		return "ayuda";
	}

}
