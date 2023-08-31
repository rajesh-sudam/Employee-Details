package com.hitachi.register;

import org.apache.tomcat.InstanceManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.awt.*;
import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api")

public class Controller {
    @Autowired
    RegisterRepo repo;
    @GetMapping("/get")
    public List<RegisterEntity>get(){
        return  repo.findAll();
    }


//    @PostMapping("/upload/image")
//    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam("image") MultipartFile file)
//            throws IOException {
//
//        repo.save(RegisterEntity.builder()
//                .name(file.getOriginalFilename())
//                .type(file.getContentType())
//                .image(ImageUtility.compressImage(file.getBytes())).build());
//        return ResponseEntity.status(HttpStatus.OK)
//                .body(new ImageUploadResponse("Image uploaded successfully: " +
//                        file.getOriginalFilename()));
//    }
    @PostMapping("post")
    public RegisterRepo details(@RequestBody RegisterEntity registerEntity){
        RegisterEntity register=repo.save(registerEntity);
        return (RegisterRepo) register;
    }

}

