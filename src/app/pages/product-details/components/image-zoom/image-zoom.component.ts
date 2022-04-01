import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';
import {Product, ProductImage} from "../../../../interfaces/product";

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.scss']
})
export class ImageZoomComponent implements OnInit, OnChanges {

  @Input() product: Product = {} as Product;
  selectedImage: ProductImage = {} as ProductImage;
baseUrl:string;
  constructor() {
    this.baseUrl=environment.apiEndPoint+"/"
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    for(let image of this.product.images)
    {
      image=this.baseUrl+image;
    }
    this.selectedImage = {
      id: 0,
      path: '',
      url: '',
      original_image_url:this.baseUrl+ this.product?.images[0],
      large_image_url: this.baseUrl+this.product?.images[0],
      medium_image_url: this.baseUrl+this.product?.images[0],
      small_image_url: this.product?.base_image?.small_image_url
    }
  
  }

  selectImage(imageObj: ProductImage): void {
    this.selectedImage = imageObj;
  }
}
