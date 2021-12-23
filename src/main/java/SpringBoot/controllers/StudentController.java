package SpringBoot.controllers;

import SpringBoot.services.StudentServices;
import SpringBoot.models.Student;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/students")
public class StudentController {
    @Autowired
    StudentServices studentService;

    @PostMapping("/savestudent/")
    public Student SaveStudent(@RequestBody Student student){
        return this.studentService.saveStudent(student);
    }

    @GetMapping("/showallstudents/")
    public List<Student> ShowAllStudents(){
        return this.studentService.findAllStudents();
    }
}