import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user";
import { Sub } from "../shared/sub";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { RegUserService } from "../services/reguser.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import { DatagrabService } from '../services/datagrab.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  user: User;
  errM: string;
  submission: string;
  sub: Sub;
  usercopy: any;
  numSubs: number;

  subs = [
    { value: 'Armbar' },
    { value: 'Triangle' },
    { value: 'Kimora' }
  ];

  constructor(
    private reguser: RegUserService,
    private dataserv: DatagrabService,
    private route: ActivatedRoute) {
    this.numSubs = 0;
    }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.reguser.getUser(+params['id']))
      .subscribe(foo => {
        this.user = foo;
        this.usercopy = foo;
      },
      errmess => {
        this.user = null; this.errM = <any>errmess;
      });

  }

  onSubmit() {
    const id = this.user.id;
    const this_date = new Date();
    const newSub = new Sub({
      subname: this.submission,
      date: this_date
    });
    for (let times = 0; times < this.numSubs; times++) {
      this.usercopy.subs.push(newSub);
    }  
    this.usercopy.save().subscribe(pers => { this.user = pers;});
  }

}
