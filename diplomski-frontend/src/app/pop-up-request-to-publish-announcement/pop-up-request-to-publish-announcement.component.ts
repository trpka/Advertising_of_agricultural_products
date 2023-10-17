import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-request-to-publish-announcement',
  templateUrl: './pop-up-request-to-publish-announcement.component.html',
  styleUrls: ['./pop-up-request-to-publish-announcement.component.css']
})
export class PopUpRequestToPublishAnnouncementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRequestPage(){
    this.router.navigate(['']);
  }

}
