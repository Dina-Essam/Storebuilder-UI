import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  productNumbers: Number = 0;
  QtyValue: Number = 1;
  constructor(private primengConfig: PrimeNGConfig ) {  }
  
  ngOnInit(): void {
    this.productNumbers = 2;
    this.primengConfig.ripple = true;
  }

}
