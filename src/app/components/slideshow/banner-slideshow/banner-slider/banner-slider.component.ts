import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.scss']
})
export class BannerSliderComponent implements OnInit {
  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1,
    "autoplay": true,
    "infinite": true
  };
  constructor() { }

  ngOnInit() {
  }

}
