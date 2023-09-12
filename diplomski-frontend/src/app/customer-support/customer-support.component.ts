import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerSupportService } from '../service/customer-support.service';
import { CustomerSupportDTO } from '../model/customerSuportDTO';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrls: ['./customer-support.component.css']
})
export class CustomerSupportComponent implements OnInit {

  forma: FormGroup;
  customerSupportDTO: CustomerSupportDTO;
  constructor( private formBuilder: FormBuilder,private customerSupportService:CustomerSupportService) { }

  ngOnInit(): void {
    this.customerSupportDTO = new CustomerSupportDTO({
      id:0,
      question: "",
      answer: "",
      date: new Date(),
      registeredUserId: 0,
      adminId: 1
    })
    this.forma = this.formBuilder.group({
      textareaCtrl: [''], // Initialize the textarea control with an empty value
      selectedOption: ['']
    });
  }

  save(){
    this.customerSupportDTO.date = new Date();
    this.customerSupportDTO.registeredUserId = Number(sessionStorage.getItem('id'));
    this.customerSupportDTO.question = this.forma.controls['textareaCtrl'].value;
    this.customerSupportService.save(this.customerSupportDTO)
    .subscribe()
  }

}
