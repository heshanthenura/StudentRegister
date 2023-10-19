package com.heshanthenura.studentregisterserver.Database.Services;

import com.heshanthenura.studentregisterserver.Database.Entities.StudentBasicDetailsEntity;
import com.heshanthenura.studentregisterserver.Database.Repositories.StudentBasicDetailsRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class DBServices {
    private final StudentBasicDetailsRepository studentBasicDetailsRepository;

    @Autowired
    public DBServices(StudentBasicDetailsRepository studentBasicDetailsRepository) {
        this.studentBasicDetailsRepository = studentBasicDetailsRepository;
    }

    public List<StudentBasicDetailsEntity> getAllStudents() {
        return studentBasicDetailsRepository.findAll();
    }

    public StudentBasicDetailsEntity saveStudentBasicDetailsEntity(StudentBasicDetailsEntity studentBasicDetailsEntity) {
        return studentBasicDetailsRepository.save(studentBasicDetailsEntity);
    }

    @Transactional
    public StudentBasicDetailsEntity updateStudentBasicDetailsEntity(StudentBasicDetailsEntity updatedStudent) {
        Long id = updatedStudent.getIndex();
        Optional<StudentBasicDetailsEntity> existingStudentOptional = studentBasicDetailsRepository.findById(id);
        if (existingStudentOptional.isPresent()) {
            StudentBasicDetailsEntity existingStudent = existingStudentOptional.get();
            existingStudent.setName(updatedStudent.getName());
            return studentBasicDetailsRepository.save(existingStudent);
        } else {
            throw new EntityNotFoundException("Student not found");
        }
    }
}
