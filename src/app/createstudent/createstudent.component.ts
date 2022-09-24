import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    lastname: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
    email: new FormControl(),
    batch: new FormControl(),
    address: new FormGroup(
      {
        city: new FormControl(),
        mandal: new FormControl(),
        district: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl()
      }
    ),
    educations: new FormArray([]),
    sourceType: new FormControl(),
    sourceFrom: new FormControl(),
    referalName: new FormControl()
  },
  )
  get studentFormArray() {
    return this.studentForm.get('educations') as FormArray;
  }


  constructor(private _studenrService: StudentService) { }

  ngOnInit(): void {
  }
  
  add() {
    this.studentFormArray.push(

      new FormGroup({
        qualification: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)])
      })
    )
  }

  submit() {
    console.log(this.studentForm.value);
  
  }
  remove(i : number) {
    this.studentFormArray.removeAt(i);
 }
}
