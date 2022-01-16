import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  productNumbers: Number = 0;
  constructor() {  }
  
  ngOnInit(): void {
    this.productNumbers = 2;
  }

}
