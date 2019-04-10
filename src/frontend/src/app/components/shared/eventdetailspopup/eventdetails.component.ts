import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirmation',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss']
})
export class EventDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EventDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public event: Event) {}

  ngOnInit() {
  }

  noClick() {
    this.dialogRef.close();
  }
}
