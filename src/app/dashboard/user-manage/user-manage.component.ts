import { Router, ActivatedRoute } from '@angular/router';
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
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userService.getUserList()
      .subscribe((data) => {
        this.userList = data;
      });
  }

  onAddUser(user: User) {
    this.userList.push(user);
    this.showAddUser = false;
  }

  goUserPage(user: User) {
    this.router.navigate(['./user', user.userId], {relativeTo: this.activatedRoute});
  }

}
