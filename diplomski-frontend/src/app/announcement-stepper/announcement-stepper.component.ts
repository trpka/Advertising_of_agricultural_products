import { ProductDTO } from './../model/productDTO';
import { AnnouncementDTO } from './../model/announcementDTO';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AnnouncementService } from '../service/announcement.service';

@Component({
  selector: 'app-announcement-stepper',
  templateUrl: './announcement-stepper.component.html',
  styleUrls: ['./announcement-stepper.component.css']
})
export class AnnouncementStepperComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  selected = 'option2';
  selectedFile: File;
  selectedPictures:string='';
  fullSelectedPictures:string='';
  announcementDTO : AnnouncementDTO;


  name: string = '';
  subcategory: string = '';
  title: string = '';
  price: string = '';
  //option : string = '';
  forma: FormGroup;
  textareaValue: string = '';
  selectedOption: string;


  constructor(private _formBuilder: FormBuilder,  private http: HttpClient, private announcementService:AnnouncementService, private formBuilder: FormBuilder) {

    this.announcementDTO=new AnnouncementDTO(
      {
          id:0,
          date:new Date(),
          title: "",
          category: "",
          subcategory: "",
          price : 0,
          quantity : 0,
          city : "",
          mobileNumber : "",
          registeredUserId : 0,
          companyId:0,
          productDTO : new ProductDTO({
            id:0,
            picture: "",
            additional_description: "",
            name: "",
            registeredUserId: 4,
            companyId: 4
            }),
        })
  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      textareaCtrl: [''], // Initialize the textarea control with an empty value
      selectedOption: ['']
    });

  }

  getOptions(): string[] {
    switch (this.selected) {
      case 'Mehanizacija':
        return ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni','Mašine i alati'];
      case 'Poljoprivredni proizvodi':
        return ['Option A', 'Option B', 'Option C'];
      case 'Pojoprivredni materijali':
        return ['Item X', 'Item Y', 'Item Z'];
      default:
        return ['None'];
    }
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);
    if(this.selectedPictures==''){
      this.selectedPictures=this.selectedFile.name;
      var path_picture="/assets/tractors/"+this.selectedFile.name;
      this.fullSelectedPictures=path_picture;
    }else{
      this.selectedPictures=this.selectedPictures+","+this.selectedFile.name;
      var path_picture="/assets/tractors/"+this.selectedFile.name;
      this.fullSelectedPictures=this.fullSelectedPictures+','+ path_picture;
    }
    this.fullSelectedPictures
  }

  save(){
    this.announcementDTO.productDTO.name = this.name;
    this.announcementDTO.category = this.selected;
    this.announcementDTO.date = new Date();
    this.announcementDTO.subcategory = this.selectedOption;
    this.announcementDTO.productDTO.additional_description = this.forma.controls['textareaCtrl'].value;
    this.announcementDTO.price = Number(this.price);
    this.announcementDTO.registeredUserId = 4;
    this.announcementDTO.productDTO.id = 4;
    //this.announcementDTO.productDTO.registeredUserId = 4;
    this.announcementService.save(this.announcementDTO)
    .subscribe()
  }


}
