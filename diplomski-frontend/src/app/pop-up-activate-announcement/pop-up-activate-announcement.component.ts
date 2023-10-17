import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-activate-announcement',
  templateUrl: './pop-up-activate-announcement.component.html',
  styleUrls: ['./pop-up-activate-announcement.component.css']
})
export class PopUpActivateAnnouncementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRequestPage(){
    this.router.navigate(['publication-announcement']);
  }

}
