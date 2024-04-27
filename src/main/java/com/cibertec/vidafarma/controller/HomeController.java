package com.cibertec.vidafarma.controller;

import org.springframework.stereotype.Controller; 
import org.springframework.web.bind.annotation.GetMapping; 
  
@Controller
public class HomeController {

	@GetMapping("/principal")
    public String principal() {
        return "index";
    }
	
	@GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/dashboard")
    public String dashboardIndex() {
        return "index";
    }
    
    @GetMapping("/acceso-denegado")
    public String accessDenied() {
        return "/error/acceso-denegado";
    }
    
    @GetMapping("/signout")
    public String logout() {
        return "redirect:/login";
    }
  
}