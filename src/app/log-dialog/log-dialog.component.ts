import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'log-dialog',
  templateUrl: './log-dialog.component.html',
})
export class LogDialog {

  constructor(
    public dialogRef: MatDialogRef<LogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
