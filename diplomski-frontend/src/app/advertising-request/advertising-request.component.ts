import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnnouncementDTO } from '../model/announcementDTO';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisement } from '../model/advertisement';

@Component({
  selector: 'app-advertising-request',
  templateUrl: './advertising-request.component.html',
  styleUrls: ['./advertising-request.component.css']
})
export class AdvertisingRequestComponent implements OnInit {

  selectedFile: File;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  forma: FormGroup;
  selectedPictures:string='';
  fullSelectedPictures:string='';
  filePath : string = '';
  advertisement: Advertisement;
  title: string;
  duration: string;
  dateForm: FormGroup;

 
  
  constructor(private _formBuilder: FormBuilder,  private http: HttpClient, private advertisementService:AdvertisementService) {
    this.dateForm = new FormGroup({
      selectedDate: new FormControl(),
    });
    this.dateForm = this._formBuilder.group({
      selectedDate: [null], // Define selectedDate control
      firstCtrl: [null, Validators.required], // Define firstCtrl control
    });
    this.advertisement=new Advertisement(
      {
          id:0,
          title: "",
          text: "",
          price : 0,
          image: "",
          date:new Date(),
          duration:0,
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
      var path_picture="/assets/"+this.selectedFile.name;
      this.fullSelectedPictures=path_picture;
      this.filePath = path_picture.toString();
    }else{
      this.selectedPictures=this.selectedPictures+","+this.selectedFile.name;
      var path_picture="/assets/"+this.selectedFile.name;
      this.fullSelectedPictures=this.fullSelectedPictures+','+ path_picture;
    }
    this.fullSelectedPictures
  }


  save(){
   // const formValue = this.dateForm.value;
   // console.log('Selected Date:', formValue.selectedDate);
    this.advertisement.companyId = 6;
    this.advertisement.price = 400;
    this.advertisement.date = this.dateForm.value.selectedDate;
    this.advertisement.image = this.filePath;
    this.advertisement.enable = false;
    this.advertisement.text = this.forma.controls['textareaCtrl'].value;
    this.advertisement.title = this.title;
    this.advertisement.duration = Number(this.duration);
    
    this.advertisementService.save(this.advertisement)
    .subscribe()
  }

}
