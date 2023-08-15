import { RegisteredUserService } from './../service/registered-user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-registration-registered-user',
  templateUrl: './confirm-registration-registered-user.component.html',
  styleUrls: ['./confirm-registration-registered-user.component.css']
})
export class ConfirmRegistrationRegisteredUserComponent implements OnInit {
  id:number;
  constructor(private route: ActivatedRoute,private router: Router,private registeredUserService: RegisteredUserService) { }

  ngOnInit(): void {
  }

  activateAccount(){
    this.id = this.route.snapshot.params['id'];
    this.registeredUserService.activateById(this.id)
    .subscribe();
    this.router.navigate(['login']);
  }

}
