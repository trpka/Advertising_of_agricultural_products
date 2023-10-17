import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-deactivate-company-request',
  templateUrl: './pop-up-deactivate-company-request.component.html',
  styleUrls: ['./pop-up-deactivate-company-request.component.css']
})
export class PopUpDeactivateCompanyRequestComponent implements OnInit {

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
