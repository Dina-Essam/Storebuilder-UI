import {Component, Input, OnInit} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  baseUrl: string='';
  constructor() { }
  @Input() banner: any

  ngOnInit(): void {
    this.baseUrl = `${environment.apiEndPoint}/`;
  }

}
