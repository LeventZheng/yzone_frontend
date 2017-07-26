import { HomePageService } from './../../../services/home-page.service';
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
    private http: HomePageService
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
