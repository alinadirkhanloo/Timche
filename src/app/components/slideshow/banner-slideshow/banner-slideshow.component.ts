import { Component, OnInit } from '@angular/core';
// import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-banner-slideshow',
  templateUrl: './banner-slideshow.component.html',
  styleUrls: ['./banner-slideshow.component.scss']
})
export class BannerSlideshowComponent implements OnInit {
  images=[
    '../../../assets/imgs/h-slider-1.jpg','../../../assets/imgs/h-slider-2.jpg',
    '../../../assets/imgs/h-slider-3.jpg'];

  // imageSources: (string | IImage)[] = [
  //   { url: '../../../assets/imgs/full-screen-image-3.jpg', caption: '<button mat-button color="primary">ali</button>', href: '#config' },
  //   { url: '../../../assets/imgs/full-screen-image-3.jpg', clickAction: () => alert('custom click function') },
  // ];
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  constructor() { }

  ngOnInit() {
  }

}
