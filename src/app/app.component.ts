import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
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
  @ViewChild("btn") btn: ElementRef;
  public isModalOpen:boolean = true;
  public display:string = 'none';
  //public btn:HTMLElement;

  constructor(private renderer: Renderer2/*protected eventService: EventSesrvice*/) { }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      defaultView: 'agendaWeek',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek,agendaDay,listMonth'
      },
      locale: 'es',
      events: []
    };
    //this.btn = document.getElementById('btn') as HTMLElement;
  }
  loadevents() {
   /* this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
    */
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  dayClick(model: any, ucCalendar:CalendarComponent) {
    this.eventoNuevo = model;
    this.renderer.selectRootElement(this.btn.nativeElement).click();

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
