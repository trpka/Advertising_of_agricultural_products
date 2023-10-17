import { Injectable } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingBasketService {

  public selectedAnnouncements : AnnouncementDTO[];
  public shopingBasketIsActive:boolean= false;

  private numberSubject = new BehaviorSubject<number>(0);
  currentNumber$ = this.numberSubject.asObservable();

  constructor() {

    this.selectedAnnouncements = [];
   }

   updateNumber(newNumber: number) {
    this.numberSubject.next(newNumber);
  }

   getselectedAnnouncementsLenght(){
    return this.selectedAnnouncements.length;
   }
}
