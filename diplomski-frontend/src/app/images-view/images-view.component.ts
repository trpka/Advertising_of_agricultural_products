import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnInit {

  @Input()
  images:string[];
  @Input()
  mainPicture:string;
  pokazi:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  slideIndex = 1;

  // Next/previous controls
  plusSlides(n:number) {
    this.showSlides(this.slideIndex += n);
    this.pokazi=false;
  }

  // Thumbnail image controls
  currentSlide(n:number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n:number) {
    let i;
    let slides = document.getElementsByClassName("mySlides")as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }

}
