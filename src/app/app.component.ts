import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
//import { EventSesrvice } from './event.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  calendarOptions: Options;
  displayEvent: any;
  events = null;
  public eventoNuevo:any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  public isModalOpen:boolean = true;
  public display:string = 'none';

  constructor(/*protected eventService: EventSesrvice*/) { }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      locale: 'es',
      events: []
    };
  }
 /* loadevents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }*/
  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any, ucCalendar:CalendarComponent) {
    this.eventoNuevo = model;


  }



  eventClick(model: any) {
    console.log("eventClick");
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

  openModal(){
    this.display='block';
 }

 onCloseHandled(){


  this.display='none';


}
}
