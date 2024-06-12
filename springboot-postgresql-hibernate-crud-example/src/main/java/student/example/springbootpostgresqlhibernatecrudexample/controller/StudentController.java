package student.example.springbootpostgresqlhibernatecrudexample.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import student.example.springbootpostgresqlhibernatecrudexample.exception.ResourceNotFoundException;
import student.example.springbootpostgresqlhibernatecrudexample.model.Student;
import student.example.springbootpostgresqlhibernatecrudexample.repository.StudentRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;






@RestController
@RequestMapping("/api/v1/")
public class StudentController {
    
    @Autowired
    private StudentRepository studentRepository;

    

    // get students 
    @GetMapping("students")
    public List<Student> getAllStudent(@RequestParam(required = false  ) String keyword  ) {
        
        if (StringUtils.hasText(keyword)) {
            // keyword sağlanınca query filtreler
            return studentRepository.findAll(keyword);
        } else {
            // verilmediyse 
            return studentRepository.findAll();
        }
    }

    
    //get student by id
    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable(value = "id")Long studentId)
        throws ResourceNotFoundException{
            Student student = studentRepository.findById(studentId)
            .orElseThrow(() -> new ResourceNotFoundException("Student not found for this id ::" + studentId));
            return ResponseEntity.ok().body(student);
        }
    
    //save student
    @PostMapping("students")
    
    public Student createStudent(@RequestBody Student student){
        return this.studentRepository.save(student);


    }
    //update student
    @PutMapping("students/{id}")
    
    public ResponseEntity<Student> updateStudent(@PathVariable(value = "id") Long studentId,
                @Valid @RequestBody Student studentDetails) throws ResourceNotFoundException{
                    Student student = studentRepository.findById(studentId)
                    .orElseThrow(()-> new ResourceNotFoundException("student not found for this id ::"+ studentId));
                    student.setName(studentDetails.getName());
                    student.setSurname(studentDetails.getSurname());
                    student.setNumber(studentDetails.getNumber());

                    return ResponseEntity.ok(this.studentRepository.save(student));

                }
        
    //delete student
    @DeleteMapping("students/{id}")
    public Map<String, Boolean> deleteStudent(@PathVariable(value = "id") Long studentId) throws ResourceNotFoundException{
        Student student = studentRepository.findById(studentId)
            .orElseThrow(()-> new ResourceNotFoundException("student not found for this id ::"+ studentId));
            this.studentRepository.delete(student);

            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;

    }


}
