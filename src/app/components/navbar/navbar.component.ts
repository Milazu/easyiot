import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  //OpenedSidePanel: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private dialogRef:MatDialogRef<LoginComponent>) {

    }

    public OpenLoginDialog(): void {
      const dialogRef = this.dialog.open(LoginComponent, {
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       
      });
    }

    public CloseLoginDialog(){
      this.dialogRef.close();
    }

  }
