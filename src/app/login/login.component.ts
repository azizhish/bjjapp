import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from "@angular/router";
import { LoginDialogComponent } from "../login-dialog/login-dialog.component";
import { RegUserService } from '../services/reguser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  top: boolean;

  constructor(private router: Router,
    public dialog: MatDialog,
    private reguser: RegUserService) {
    this.top = false;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.reguser.checkLogin(this.user, this.pass).subscribe(result => {
      if (result == -1) {
        let dialogRef = this.dialog.open(LoginDialogComponent, {
          width: '400px',
          height: '200px',
        });
      }
      else {
        this.router.navigate(['/dashboard', result]);
       }
     });
      
    
   }

}



