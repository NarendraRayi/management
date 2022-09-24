import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })
  constructor(private ls: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.loginForm.value);
    this.ls.login(this.loginForm.value).subscribe(
      (data: any) => {
        alert('Login Successfully!!')
        this._router.navigateByUrl('/dashboard');
        sessionStorage.setItem('management-token',data.token)
      },
      (err: any) => {
        alert('Internal Server Error');
      }
    )
  }

}
