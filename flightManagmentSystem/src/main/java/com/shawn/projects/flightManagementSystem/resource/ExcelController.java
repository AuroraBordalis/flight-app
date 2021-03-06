package com.shawn.projects.flightManagementSystem.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.MediaType;

import com.shawn.projects.flightManagementSystem.services.ExcelService;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping("/api/excel")
public class ExcelController {
	
	@Autowired 
	ExcelService fileService;
	
	@GetMapping("/download")
	public ResponseEntity<Resource> getFile(){
		String filename = "flightAppData.xlsx";
		InputStreamResource file = new InputStreamResource(fileService.load());
		return ResponseEntity.ok()
		        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + filename)
		        .contentType(MediaType.parseMediaType("application/vnd.ms-excel"))
		        .body(file);
	}
	

}
