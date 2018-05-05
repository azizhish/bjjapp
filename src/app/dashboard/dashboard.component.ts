import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { RegUserService } from "../services/reguser.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userID: number;
  sub: any;
  user: User;
  errM: string;


  constructor(
    private reguser: RegUserService,
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.userID = +params['id']; // (+) converts string 'id' to a number

    //   // In a real app: dispatch action to load the details here.
    // });

    this.route.params
      .switchMap((params: Params) => this.reguser.getUser(+params['id']))
      .subscribe(foo => this.user = foo,
      errmess => {
        this.user = null; this.errM = <any>errmess;
      });
  }

}
