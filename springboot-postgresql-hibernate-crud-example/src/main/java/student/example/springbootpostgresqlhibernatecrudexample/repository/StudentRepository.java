package student.example.springbootpostgresqlhibernatecrudexample.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import student.example.springbootpostgresqlhibernatecrudexample.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    @Query("SELECT s FROM Student s " +
           "WHERE LOWER(s.name) LIKE LOWER(CONCAT('%', ?1, '%'))" +
           " OR LOWER(s.surname) LIKE LOWER(CONCAT('%', ?1, '%'))" +
           " OR LOWER(CAST(s.number AS STRING)) LIKE LOWER(CONCAT('%', ?1, '%'))")//long u string gibi kabul eder "AS STRING"
    List<Student> findAll(String keyword);
}
