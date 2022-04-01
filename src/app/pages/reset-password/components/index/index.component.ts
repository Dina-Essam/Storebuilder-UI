import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  phoneNumber: string | undefined;
  password: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
