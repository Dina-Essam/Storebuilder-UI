import {Component, Input, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {MainSlider} from "../../../../interfaces/main-slider";

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  sliderOptions: OwlOptions;
  constructor() {
    this.sliderOptions = {
      loop: true,
      autoplay: true,
      center: true,
      dots: true,
      nav: true,
      autoHeight: false,
      autoWidth: true,
      lazyLoad: true,
      autoplayHoverPause: true,
      navText: [
        '<i class="pi pi-angle-left white-color font-size-30"></i>',
        '<i class="pi pi-angle-right white-color font-size-30"></i>'
      ],
      responsive: {
        0: {
          items: 1,
          dots: true,
          nav: false,
        },
        600: {
          items: 1,
          dots: true,
          nav: false,
        },
        1000: {
          items: 1,
        }
      }
    }
  }
@Input() sliders: Array<MainSlider> = []
  ngOnInit(): void {
  }
}
