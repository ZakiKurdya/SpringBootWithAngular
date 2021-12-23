import {Component, OnInit} from '@angular/core';
import { Student } from './Student';
import {UserService} from "./user-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  declare students: Student[];
  parameters = ['ID', 'Name', 'Major', 'Grade'];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.findAllStudent().subscribe(data => {
      this.students = data;
    });
  }

  onSubmit() {
    let student : Student = new Student(
      Number.parseInt(( <HTMLInputElement>document.getElementById("id")).value),
      (<HTMLInputElement>document.getElementById("name")).value,
      (<HTMLInputElement>document.getElementById("major")).value,
      Number.parseFloat((<HTMLInputElement>document.getElementById("grade")).value)
    );
    this.userService.save(student).subscribe(data => {
      alert("Student created successfully.");
    });
    window.location.reload();
  }
}
// Zaki Kurdya
