import { UserService } from './../../../services/user.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'yzone-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  userNickName: string;
  email: string;
  password: string;

  @Output() onClose = new EventEmitter();
  @Output() onAdded = new EventEmitter();
  constructor(
    private http: UserService
  ) { }

  ngOnInit() { }

  onSubmit() {
    this.http.register({
      userNickName: this.userNickName,
      email: this.email,
      password: this.password
    }).subscribe((data) => {
      if (data === false || data === true) {
        return;
      }
      this.onAdded.emit(data.user);
    });
  }

  close() {
    this.onClose.emit();
  }

}
