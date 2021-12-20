import { Component, OnInit } from '@angular/core';
import { IUser } from '../domain/model/IUser';
import { UserService } from '../domain/service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  isDetail: boolean = false;
  isWait: boolean = true;

  usersList$: IUser[] = []; 
  displayedColumns: string[] = ['id', 'login', 'avatar_url', 'url', 'html_url' ];

  constructor(private userService: UserService) {  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe(data => {
        this.usersList$ = data;
        this.isWait = false;
      })

  }

  // TDD
  // getGitUsers() {
  //   this.userService.getUsers()
  //     .subscribe(users => console.log(users))
  // }

}
