import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserComponent } from '../admin/entity/user/user.component';

@Component({
  selector: 'app-deleredialog-component',
  templateUrl: './deleredialog-component.component.html',
  styleUrls: ['./deleredialog-component.component.scss']
})
export class DeleredialogComponentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<UserComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close(false);
  }

}
