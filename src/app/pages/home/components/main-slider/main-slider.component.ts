import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  sliderOptions: OwlOptions = {
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
  sliders: Array<any> = []
  constructor() {
    this.sliders = [
      {
        id: 1,
        image: 'https://zahranapi.el-dokan.com/storage/uploads/IxENQ5-1625131226.png'
      },
      {
        id: 2,
        image: 'https://zahranapi.el-dokan.com/storage/uploads/nkfvbw-1626034305.png'
      },
      {
        id: 3,
        image: 'https://zahranapi.el-dokan.com/storage/uploads/CzDxES-1625665191.png'
      }
    ]
  }

  ngOnInit(): void {
  }

}
