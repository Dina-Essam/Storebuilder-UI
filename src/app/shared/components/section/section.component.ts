import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  constructor() { }
  @Input() title: string | undefined
  @Input() categoryID: number | undefined

  ngOnInit(): void {
  }

}
