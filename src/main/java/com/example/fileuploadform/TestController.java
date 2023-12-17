package com.example.fileuploadform;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @PostMapping("/test")
    @CrossOrigin(origins = "http://localhost:5173")
    public ResponseEntity uploadFile(@RequestParam(value = "file", required = false) MultipartFile file, @RequestParam(value = "model") String request) throws JsonProcessingException {
        System.out.println(new ObjectMapper().readValue(request, HashMap.class).get("name"));
        return new ResponseEntity<>(new HashMap<>(), HttpStatus.OK);
    }

}
