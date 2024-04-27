package com.cibertec.vidafarma.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PublicController {
      
	@GetMapping("/")
    public String root() {
        return "public/index";
    }
  
}