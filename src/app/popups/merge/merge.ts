import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-merge",
  templateUrl: "merge.html",
})
export class MergeDialog {
  constructor(
    public dialogRef: MatDialogRef<MergeDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.data.Confirmation = false;
    this.dialogRef.close(this.data);
  }
}
