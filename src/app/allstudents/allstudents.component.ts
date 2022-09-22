import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Students } from '../students';

@Component({
  selector: 'app-allstudents',
  templateUrl: './allstudents.component.html',
  styleUrls: ['./allstudents.component.css']
})
export class AllstudentsComponent implements OnInit {

  public students: Students[] = [];


  public column: string = "";
  public order: string = '';
  constructor(private _studentService: StudentService,private _router: Router) { 
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
  sort() {
    return this._studentService.sortStudent(this.column,this.order).subscribe(
      (data: any) => {
        this.students = data;
      },
      (err: any) => {
        alert('Internal Server');
      }
    )
  }
  delete(id:string) {
    return this._studentService.deleteStudent(id).subscribe(
      (data: any) => {
        alert("Deleted successfully!!");
        location.reload();
      },
      (err: any) => {
        alert('Internal Server');
      }
    )
  }
  view() {
    return this._router.navigateByUrl('dashboard/createstudent');
  }
 
}
