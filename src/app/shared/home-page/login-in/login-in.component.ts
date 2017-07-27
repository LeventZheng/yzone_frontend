import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yzone-login-in',
  templateUrl: './login-in.component.html'
})
export class LoginInComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private http: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.login({email: this.email, password: this.password});
  }

}
