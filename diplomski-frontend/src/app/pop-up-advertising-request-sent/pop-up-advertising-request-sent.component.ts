import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-advertising-request-sent',
  templateUrl: './pop-up-advertising-request-sent.component.html',
  styleUrls: ['./pop-up-advertising-request-sent.component.css']
})
export class PopUpAdvertisingRequestSentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRequestPage(){
    this.router.navigate(['']);
  }

}
