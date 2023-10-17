import {Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up-add-product-into-basket',
  templateUrl: './pop-up-add-product-into-basket.component.html',
  styleUrls: ['./pop-up-add-product-into-basket.component.css']
})
export class PopUpAddProductIntoBasketComponent implements OnInit {

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
