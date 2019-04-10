import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event-service.service';
import { Event } from '../../models/event';
import { Tag } from 'src/app/models/tag';
import { MatDialog, MatDialogConfig, MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { EventDetailsComponent } from '../shared/eventdetailspopup/eventdetails.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: Event[];
  categories: Tag[];
  tevents: Event[];

  constructor(private eventService: EventService, private dialog: MatDialog) { } 

  ngOnInit() {
    this.getEvents();
  }

  popout(eve: Event)
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = eve;
    const dialogRef = this.dialog.open(EventDetailsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  getEveByCat(cat: Tag): Event[]
  {
    this.tevents=[];
    this.events.forEach(event => { if(event.tags.includes(cat)) this.tevents.push(event)  });
    return this.tevents;
  }

  getEvents(): void {
    this.eventService
    .getEvents()
    .subscribe(events => {
      this.categories=[];
      this.events = events;
      this.events.forEach(event => {
        event.tags.forEach( tag => {
          if(!this.categories.includes(tag)) { this.categories.push(tag) }; 
        });
      
      });

    });
  }

}
