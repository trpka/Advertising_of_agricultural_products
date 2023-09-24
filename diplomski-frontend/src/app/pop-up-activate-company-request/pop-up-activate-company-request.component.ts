import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-activate-company-request',
  templateUrl: './pop-up-activate-company-request.component.html',
  styleUrls: ['./pop-up-activate-company-request.component.css']
})
export class PopUpActivateCompanyRequestComponent implements OnInit {

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
