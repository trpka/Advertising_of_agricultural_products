import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-purchase-done',
  templateUrl: './pop-up-purchase-done.component.html',
  styleUrls: ['./pop-up-purchase-done.component.css']
})
export class PopUpPurchaseDoneComponent implements OnInit {

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
