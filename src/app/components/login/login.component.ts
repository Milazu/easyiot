import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

import {  MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  private email: string;
  private password: string;
  
  constructor(private dialogRef:MatDialogRef<LoginComponent>) {
   }

  ngOnInit() {
  }
 
  public CloseLoginDialog(){
    this.dialogRef.close();
    console.log("HEY CERRAR DIALOG");
  }

}
