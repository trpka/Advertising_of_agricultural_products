import { ProductDTO } from './../model/productDTO';
import { AnnouncementDTO } from './../model/announcementDTO';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AnnouncementService } from '../service/announcement.service';
import { PopUpActivateAnnouncementComponent } from '../pop-up-activate-announcement/pop-up-activate-announcement.component';
import { MatDialog } from '@angular/material/dialog';
import { PopUpRequestToPublishAnnouncementComponent } from '../pop-up-request-to-publish-announcement/pop-up-request-to-publish-announcement.component';
import { UserService } from '../service/user.service';
import { User } from '../model/user';
import { UserDTO } from '../model/userDTO';

@Component({
  selector: 'app-announcement-stepper',
  templateUrl: './announcement-stepper.component.html',
  styleUrls: ['./announcement-stepper.component.css']
})
export class AnnouncementStepperComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.nullValidator],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.nullValidator],
  });
  isEditable = false;

  selected = 'option2';
  selectedCity: string= 'opt';
  selectedFile: File;
  selectedPictures:string='';
  fullSelectedPictures:string='';
  announcementDTO : AnnouncementDTO;
  filePath : string = '';


  name: string = '';
  subcategory: string = '';
  title: string = '';
  price: string = '';
  //option : string = '';
  forma: FormGroup;
  textareaValue: string = '';
  selectedOption: string;
  userDTO:UserDTO;
  idUser:number;
  isRegisteredUserLogged:boolean = false;
  isCompanyLogged:boolean = false;


  constructor(private _formBuilder: FormBuilder,  
              private http: HttpClient, 
              private announcementService:AnnouncementService, 
              private formBuilder: FormBuilder,
              private dialogRef: MatDialog,
              private userService:UserService
              ) {

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
          enable:false,
          registeredUserId : 0,
          companyId:0,
          productDTO : new ProductDTO({
            id:0,
            picture: "",
            pictures:[],
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
    this.idUser = Number(sessionStorage.getItem('id'));
    this.userService.getOne(this.idUser)
    .subscribe(res1=>{this.userDTO = res1;
      if(res1.role == "RegisteredUser"){
        this.isRegisteredUserLogged = true;
      }
      else if(res1.role == "Company")
      {
        this.isCompanyLogged = true;
      }
    })

  }

  getOptions(): string[] {
    if(this.isRegisteredUserLogged == true)
    {
      switch (this.selected) {
        case 'Mehanizacija':
          return ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni','Mašine i alati'];
        case 'Poljoprivredni proizvodi':
          return ['Povrće', 'Voće', 'Žitarice', 'Ostalo'];
        default:
          return ['None'];
      }

    }
    else{
      switch (this.selected) {
        case 'Mehanizacija':
          return ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni','Mašine i alati'];
        case 'Poljoprivredni proizvodi':
          return ['Povrće', 'Voće', 'Žitarice', 'Ostalo'];
        case 'Pojoprivredni materijali':
          return ['Semena', 'Đubriva', 'Stočna hrana', 'Zaštita bilja', 'Alati i oprema'];
        default:
          return ['None'];
      }
    }
    
  }

  public onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    if(this.selectedPictures==''){
      this.selectedPictures=this.selectedFile.name;
      var path_picture = "";
      if(this.selected == 'Mehanizacija'){
       path_picture="/assets/mechanization/"+this.selectedFile.name;
      }
      else if(this.selected == 'Poljoprivredni proizvodi'){
        path_picture="/assets/products/"+this.selectedFile.name;
      }
      else if(this.selected == 'Pojoprivredni materijali'){
        path_picture="/assets/materials/"+this.selectedFile.name;
      }
      
      this.fullSelectedPictures=path_picture;
      this.filePath = path_picture.toString();
    }else{
      this.selectedPictures=this.selectedPictures+","+this.selectedFile.name;
      var path_picture="/assets/mechanization/"+this.selectedFile.name;
      this.fullSelectedPictures=this.fullSelectedPictures+','+ path_picture;
    }
    this.fullSelectedPictures
  }

  save(){
    this.announcementDTO.category = this.selected;
    this.announcementDTO.date = new Date();
    this.announcementDTO.subcategory = this.selectedOption;
    this.announcementDTO.price = Number(this.price);
    if(this.isRegisteredUserLogged == true){
      this.announcementDTO.registeredUserId = Number(sessionStorage.getItem('id'));
    }
    else if(this.isCompanyLogged == true){
      this.announcementDTO.companyId = Number(sessionStorage.getItem('id'));
    }
    this.announcementDTO.city = this.selectedCity;
    this.announcementDTO.enable = false;
   
    this.announcementDTO.productDTO.id = 4;
    this.announcementDTO.productDTO.additional_description = this.forma.controls['textareaCtrl'].value;
    this.announcementDTO.productDTO.picture = this.filePath;
    this.announcementDTO.productDTO.pictures = this.fullSelectedPictures.split(",");
  
    //this.announcementDTO.productDTO.registeredUserId = 4;
    this.announcementService.save(this.announcementDTO)
    .subscribe()
    
    this.dialogRef.open(PopUpRequestToPublishAnnouncementComponent);
  }


}
