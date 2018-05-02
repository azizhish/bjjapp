import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs/Observable";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: User[];
  errM: string;

  constructor(private userv: UserService) { }

  ngOnInit() {
    this.userv.getUsers().subscribe(arr => this.users = arr,
      errMessage => this.errM = errMessage);
  }

}
