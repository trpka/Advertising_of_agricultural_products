import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-action',
  templateUrl: './pop-up-action.component.html',
  styleUrls: ['./pop-up-action.component.css']
})
export class PopUpActionComponent implements OnInit {
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
