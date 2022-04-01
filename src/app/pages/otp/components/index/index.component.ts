import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  size: number = 50;
  value1: number | undefined;
  value2: number | undefined;
  value3: number | undefined;
  value4: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }


}
