import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Students } from '../students';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  public students: Students[] = [];
  constructor(private _studentService: StudentService) { 
    this._studentService.getStudent().subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internal Server');
      }
    )
  }

  ngOnInit(): void {
  }

}
