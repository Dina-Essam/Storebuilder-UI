import {Component, Input, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss']
})
export class ProductSliderComponent implements OnInit {
  options: OwlOptions;
  constructor() {
    this.options = {
      stagePadding: 0,
      loop: true,
      autoplay: true,
      dots: false,
      autoWidth: false,
      nav: true,
      lazyLoad: true,
      autoplayHoverPause: true,
      rewind: false,
      margin: 15,
      navText: [
        '<i class="pi pi-angle-left main-color font-size-30"></i>',
        '<i class="pi pi-angle-right main-color font-size-30"></i>'
      ],
      responsive: {
        0: {
          items: 2,
          nav: false,
        },
        300: {
          items: 2,
          nav: false
        },
        400: {
          items: 3,
          nav: false
        },
        600: {
          items: 4
        },
        740: {
          items: 5
        },
        800: {
          items: 6
        },
        940: {
          items: 7
        },
        1280: {
          items: 8
        },
        1300: {
          items: 9
        },
        1400: {
          items: 10
        },
        1600: {
          items: 12
        },
      }
    };
  }
  @Input() products: Array<any> | undefined
  ngOnInit(): void {
  }
}
