import { UserService } from './../../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yzone-login-in',
  templateUrl: './login-in.component.html'
})
export class LoginInComponent implements OnInit {

  email: string;
  password: string;

  @Output() onLogin = new EventEmitter();
  constructor(
    private http: UserService
  ) { }

  ngOnInit() {
  }

  setToken(token: string): void {
      localStorage['Authorization'] = 'Bearer ' + token;
  }

  onSubmit() {
    this.http.login({email: this.email, password: this.password})
      .subscribe((data) => {
          console.log(data);
          this.setToken(data.token);
      });
  }

}
