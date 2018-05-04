import { Component, OnInit } from '@angular/core';
import { RegUserService } from '../services/reguser.service';
import { User } from "../shared/user";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateUserTaken } from '../validators/userName';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  counter: number;
  user: User;
  usercopy = null;

  //Reactive Forms Stuff
  newUser: FormGroup;
  formErrors = {
    'fname': '',
    'lname': '',
    'uname': '',
    'pass': '',
  };

  validationMessages = {
    'fname': {
      'required': 'First name is required.',
    },
    'lname': {
      'required': 'Last name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
    },
    'uname': {
      'required': 'User name is required.',
      true: 'User name is take'
    },
    'pass': {
      'required': 'Password is required.',
    }
  };

  constructor(private reguser: RegUserService,
    private fb:FormBuilder) {
    this.reguser.getCounterStatus().subscribe(count => this.counter = count.id);
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.newUser = this.fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      uname: ["", [Validators.required], ValidateUserTaken.createValidator(this.reguser)],
      pass: ["", Validators.required]
    });

    this.newUser.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }
  
  onValueChanged(data?: any) {
    if (!this.newUser) { return; }
    const form = this.newUser;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && !control.valid && control.dirty) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  
  
  onSubmit() {
    this.counter++;
    let obj = this.newUser.value;
    this.usercopy = new User({
      id: this.counter,
      fname: obj.fname,
      lname: obj.lname,
      uname: obj.uname,
      pass: obj.pass
    });
    this.reguser.registerUser(this.usercopy)
      .subscribe(postit => this.user = postit);
    this.reguser.setCounter(this.counter);
   }

}
