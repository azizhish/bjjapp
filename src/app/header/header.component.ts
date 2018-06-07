import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user";
import { Sub } from "../shared/sub";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { RegUserService } from "../services/reguser.service";
import { Observable } from "rxjs";

import { DatagrabService } from '../services/datagrab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private reguser: RegUserService,
  private dataserv: DatagrabService,
  private route: ActivatedRoute){ }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.reguser.getUser(+params['id']))
      .subscribe(foo => {
        this.user = foo;
      });

  }

}
