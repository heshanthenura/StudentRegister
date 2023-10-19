package com.heshanthenura.studentregisterserver;

import com.heshanthenura.studentregisterserver.Database.Entities.StudentBasicDetailsEntity;
import com.heshanthenura.studentregisterserver.Database.Services.DBServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class MainController {

    @Autowired
    DBServices dbServices;

    Logger logger = Logger.getLogger("info-logger");

    @CrossOrigin(origins = "*")
    @GetMapping("/")
    public ResponseEntity<List<StudentBasicDetailsEntity>> getAllStudentsBasicDetails() {
        List<StudentBasicDetailsEntity> students = dbServices.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/addBasicDetails")
    public ResponseEntity<StudentBasicDetailsEntity> addStudentsBasicDetails(@Valid @RequestBody StudentBasicDetailsEntity studentBasicDetailsEntity, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessages = new StringBuilder();

            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMessages.append(error.getDefaultMessage()).append(", ");
            }

            return ResponseEntity.badRequest().body(null); // Return a bad request response
        }

        logger.info(String.valueOf(studentBasicDetailsEntity.getIndex()));
        logger.info(studentBasicDetailsEntity.getName());

        StudentBasicDetailsEntity savedEntity = dbServices.saveStudentBasicDetailsEntity(studentBasicDetailsEntity);

        return ResponseEntity.ok(savedEntity); // Return the saved entity
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/updateBasicDetails/{id}")
    public ResponseEntity<StudentBasicDetailsEntity> updateStudentsBasicDetails(@PathVariable long id, @Valid @RequestBody StudentBasicDetailsEntity studentBasicDetailsEntity, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            StringBuilder errorMessages = new StringBuilder();

            for (FieldError error : bindingResult.getFieldErrors()) {
                errorMessages.append(error.getDefaultMessage()).append(", ");
            }

            return ResponseEntity.badRequest().body(null); // Return a bad request response
        }

        logger.info(studentBasicDetailsEntity.getName());
        logger.info(String.valueOf(studentBasicDetailsEntity.getIndex()));

        StudentBasicDetailsEntity updatedEntity = dbServices.updateStudentBasicDetailsEntity(studentBasicDetailsEntity);

        if (updatedEntity == null) {
            return ResponseEntity.notFound().build(); // Return a not found response if the entity was not found
        }

        return ResponseEntity.ok(updatedEntity); // Return the updated entity
    }
}
