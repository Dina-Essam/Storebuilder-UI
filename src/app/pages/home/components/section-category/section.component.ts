import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-category',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionCategoryComponent implements OnInit {
  constructor() { }
  @Input() title: string | undefined

  ngOnInit(): void {
  }

}
