import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  constructor() { }
  @Input() name: string | undefined
  @Input() totalItems: string | undefined

  ngOnInit(): void {
  }

}
