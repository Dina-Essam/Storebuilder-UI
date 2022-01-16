import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  relatedProducts: Array<any> = []
  productDetails: any;
  constructor() { }

  ngOnInit(): void {
    this.getRelatedProducts();
  }
  getRelatedProducts(): void {
    this.relatedProducts = [
      {
        id: 1,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 2,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 3,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 4,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 5,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 6,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 7,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 8,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 9,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 10,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 11,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 12,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 13,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 14,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      },
      {
        id: 15,
        name: 'Apple iPhone 12 Pro Max blue company 128g 12ram',
        price: 100,
        rating: '4.8',
        ratingNumber: 112
      }
    ]
    this.productDetails = this.relatedProducts[0]
  }
}
