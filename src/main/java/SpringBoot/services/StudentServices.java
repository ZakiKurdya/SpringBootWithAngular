package SpringBoot.services;

import SpringBoot.models.Student;
import SpringBoot.repositories.StudentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {
    @Autowired
    StudentRepository studentRepository;

    public Student saveStudent(Student student) {
        return this.studentRepository.save(student);
    }

    public List<Student> findAllStudents() {
        return this.studentRepository.findAll();
    }
}