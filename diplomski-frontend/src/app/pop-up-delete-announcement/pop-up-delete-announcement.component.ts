import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-delete-announcement',
  templateUrl: './pop-up-delete-announcement.component.html',
  styleUrls: ['./pop-up-delete-announcement.component.css']
})
export class PopUpDeleteAnnouncementComponent implements OnInit {

  @Output()
  ClickedDecision:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  yesCancleReservation(){
    this.ClickedDecision.next(true);
  }
  noCancleReservation(){
    this.ClickedDecision.next(false);
  }
}
