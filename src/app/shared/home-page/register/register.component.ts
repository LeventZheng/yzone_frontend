import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yzone-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  userNickName: string;
  email: string;
  password: string;

  constructor(
    private http: UserService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.http.register({
      userNickName: this.userNickName,
      email: this.email,
      password: this.password
    });
  }
}
