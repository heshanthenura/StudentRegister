package com.heshanthenura.studentregisterserver.Database.Entities;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

@Entity
@Table(name = "student_basic_details")
public class StudentBasicDetailsEntity {
    @Id
    private Long index;

    @NotBlank(message = "Name Cannot Be Empty")
    @NotEmpty(message = "Name Cannot Be Empty")
    private String name;

    public Long getIndex() {
        return index;
    }

    public void setIndex(Long index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
