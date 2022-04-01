import {Component, Input, OnInit} from '@angular/core';
import {Merchants} from "../../../../interfaces/merchant";

@Component({
  selector: 'app-merchant-block',
  templateUrl: './merchant-block.component.html',
  styleUrls: ['./merchant-block.component.scss']
})
export class MerchantBlockComponent implements OnInit {
  @Input() data: Merchants = {} as Merchants;

  constructor() {
  }

  ngOnInit(): void {
  }

}
