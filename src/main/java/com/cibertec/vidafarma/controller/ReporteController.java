package com.cibertec.vidafarma.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import com.cibertec.vidafarma.entity.ClienteEntity;
import com.cibertec.vidafarma.services.ClienteService;
import com.cibertec.vidafarma.services.JasperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/reportes")
public class ReporteController{

	@Autowired
	JasperService<ClienteEntity> reportClienteService;

	@Autowired
	ClienteService clienteService;
	
	@GetMapping()
	public String reporteria(Model model) {		
		return "reporte";
	}
	
	@GetMapping("/generar")
    public ResponseEntity<Resource> generarReporte(@RequestParam("tabla") String tabla,
    		@RequestParam("formato") String formato) {
		
		byte[] reportContent = null;
		
		if(tabla.equals("clientesVF")) {
			reportContent = reportClienteService.getItemReport(clienteService.listar(), formato, tabla);
		}

        ByteArrayResource resource = new ByteArrayResource(reportContent);
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .contentLength(resource.contentLength())
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        ContentDisposition.attachment()
                                .filename(tabla + obtenerFormatoFecha() + "." + formato)
                                .build().toString())
                .body(resource);
    }
	
	public String obtenerFormatoFecha() {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyyyyHHmm");
        String fechaHoraFormateada = now.format(formatter);
        return fechaHoraFormateada;
    }

}
