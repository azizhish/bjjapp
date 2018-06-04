import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user";
import { Sub } from "../shared/sub";
import { ActivatedRoute, ParamMap, Params } from "@angular/router";
import { RegUserService } from "../services/reguser.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import { DatagrabService } from '../services/datagrab.service';
import { NgxChartsModule } from "@swimlane/ngx-charts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userID: number;
  user: User;
  errM: string;
  submission: string;
  sub: Sub;
  usercopy: any;
  mySubs: Sub[]; //this users submissions[] which contains {subname, date}
  subsChart = [];
  subsCount = [];
  numSubs: number;
  fav_sub: string;


  //Chart Variables
  chartData = false;
  view: any[] = [700, 400];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  //The universe of submissions for our app
  subs = [
    { value: 'Armbar' },
    { value: 'Triangle' },
    { value: 'Kimora' }
  ];

  constructor(
    private reguser: RegUserService,
    private dataserv: DatagrabService,
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.reguser.getUser(+params['id']))
      .subscribe(foo => {
        this.user = foo;
        this.userID = this.user.id;
        this.usercopy = foo;
        this.createSummary();
      },
      errmess => {
        this.user = null; this.errM = <any>errmess;
      });
    
  }

  createSummary() {
    this.dataserv.getSubs(this.userID).subscribe(submissions => {
      this.mySubs = submissions;
      this.processSubs();
      this.chartData = true;
      for (var key in this.subsChart) {
        console.log(this.subsChart[key].value);
       }
      this.fav_sub = this.find_fav();
    });
    this.dataserv.getNumSubs(this.userID).subscribe(numsubs => this.numSubs = numsubs);
  }

  // Populate the array that will be used for the Submissions Chart
  processSubs() {
    this.mySubs.forEach(element => {
      if (this.subsCount[element.subname]) {
        this.subsCount[element.subname] += 1;
      }
      else { 
        this.subsCount[element.subname] = 1;
      }
    });
    for (var key in this.subsCount) {
      let singleEntry = {
        name: key,
        value: this.subsCount[key]
      };
      this.subsChart.push(singleEntry);
     }
   }
  
  find_fav(): string {
    let tracker = [0, 0, 0];
    let current = "";
    let count = 0,fin = 0;
    const subUniverse = this.subs;
    const subList = this.mySubs;
    for (let index = 0; index < subUniverse.length; index++) {
      const element = subUniverse[index];
      current = element.value;
      for (let index2 = 0; index2 < subList.length; index2++) {
        if (subList[index2].subname == current) {
          tracker[index] += 1;
        }
       }
    }
    for (let index = 0; index < tracker.length; index++) {
      // console.log(tracker[index]);
      if (count <= tracker[index]){
        count = tracker[index];
        fin = index;
       }
    }
    return subUniverse[fin].value;
    // let i;
    // for (i in this.subs) {
    //   console.log(i.value);
    //  }

   }


}
