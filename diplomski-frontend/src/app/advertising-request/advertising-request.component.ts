import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisement } from '../model/advertisement';
import { MatDialog } from '@angular/material/dialog';
import { PopUpAdvertisingRequestSentComponent } from '../pop-up-advertising-request-sent/pop-up-advertising-request-sent.component';


@Component({
  selector: 'app-advertising-request',
  templateUrl: './advertising-request.component.html',
  styleUrls: ['./advertising-request.component.css']
})
export class AdvertisingRequestComponent implements OnInit {

  selectedFile: File;
  isLinear:boolean = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  forma: FormGroup;
  selectedPictures:string='';
  fullSelectedPictures:string='';
  filePath : string = '';
  advertisement: Advertisement;
  title: string = "";
  dateForm: FormGroup;
  dateForm1: FormGroup;
  pricePerDay:number= 500;
  totalPrice:number = 0;
  numOfDays:number = 0;

 
  
  constructor(private _formBuilder: FormBuilder,  private http: HttpClient, private advertisementService:AdvertisementService,private dialogRef: MatDialog) {
    this.dateForm = new FormGroup({
      selectedDate: new FormControl(),
    });
    this.dateForm = this._formBuilder.group({
      selectedDate: [null], // Define selectedDate control
      firstCtrl: [null, Validators.required], // Define firstCtrl control
    });

    this.dateForm1 = new FormGroup({
      selectedDate: new FormControl(),
    });
    this.dateForm1 = this._formBuilder.group({
      selectedDate: [null],
      firstCtrl: [null, Validators.required], 
    });
    this.advertisement=new Advertisement(
      {
          id:0,
          title: "",
          text: "",
          price : 0,
          image: "",
          startDate: new Date(),
          endDate:new Date(),
          enable:false,
          companyId:0
        });
   }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.forma = this._formBuilder.group({
      textareaCtrl: [''], // Initialize the textarea control with an empty value
      selectedOption: ['']
    });
  }


  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    if(this.selectedPictures==''){
      this.selectedPictures=this.selectedFile.name;
      var path_picture="/assets/advertisement/"+this.selectedFile.name;
      this.fullSelectedPictures=path_picture;
      this.filePath = path_picture.toString();
    }else{
      this.selectedPictures=this.selectedPictures+","+this.selectedFile.name;
      var path_picture="/assets/advertisement/"+this.selectedFile.name;
      this.fullSelectedPictures=this.fullSelectedPictures+','+ path_picture;
    }
    this.fullSelectedPictures
  }

  calculatePrice(){
     var Difference_In_Time = this.dateForm.get('selectedDate')?.value - this.dateForm1.get('selectedDate')?.value;
     this.numOfDays = Difference_In_Time / (1000 * 3600 * 24)*(-1);
     this.totalPrice = this.pricePerDay *   this.numOfDays;
  }
 

  save(){
    this.advertisement.companyId = 6;
    this.advertisement.price =  this.totalPrice;
    this.advertisement.startDate = this.dateForm.value.selectedDate;
    this.advertisement.endDate = this.dateForm1.value.selectedDate;
    this.advertisement.image = this.filePath;
    this.advertisement.enable = false;
    this.advertisement.text = this.forma.controls['textareaCtrl'].value;
    this.advertisement.title = this.title;
    this.advertisementService.save(this.advertisement)
    .subscribe()
    this.dialogRef.open(PopUpAdvertisingRequestSentComponent);
  }

}
