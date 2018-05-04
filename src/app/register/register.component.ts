import { Component, OnInit } from '@angular/core';
import { RegUserService } from '../services/reguser.service';
import { User } from "../shared/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  counter: number;
  user: User;
  usercopy = null;

  constructor(private reguser: RegUserService) {
    this.reguser.getCounterStatus().subscribe(count => this.counter = count.id);
  }

  ngOnInit() {
    this.user = new User({id: -1, fname: "", lname: "", uname:"", pass:""})
  }

  onSubmit() {
    this.counter++;
    this.user.id = this.counter;
   
    this.usercopy = this.user;
    this.reguser.registerUser(this.usercopy)
      .subscribe(postit => this.user = postit);
    this.reguser.setCounter(this.counter);
   }

}
