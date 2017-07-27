import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yzone-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit {

  userList: User[] = [];
  showAddUser = false;
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserList()
      .subscribe((data) => {
        this.userList = data.userList;
      });
  }

  onAddUser(user) {
    this.userList.push(user);
    this.showAddUser = false;
  }

}
