package com.heshanthenura.studentregisterserver.Database.Repositories;

import com.heshanthenura.studentregisterserver.Database.Entities.StudentBasicDetailsEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentBasicDetailsRepository extends JpaRepository<StudentBasicDetailsEntity,Long> {

}
