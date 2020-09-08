import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from 'src/app/popups/search/search.component';
@Component({
  selector: "app-master",
  templateUrl: "./master.component.html",
  styleUrls: ["./master.component.scss"],
})
export class MasterComponent implements OnInit {
  showFiller = false;
  menu = false;
  clock = false;
  setting = false;
  inventory = false;
 
  constructor(
    private nav: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
   
  }

  Search() {
    const dialogRef = this.dialog.open(SearchComponent, {
      width: "950px",
    });
  }
}
