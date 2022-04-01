import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  constructor() { }
  @Input() category: Category = {} as Category;
  ngOnInit(): void {
    if(!(this.category.image.substring(0,environment.apiEndPoint.length) == environment.apiEndPoint))
    {
     this.category.image=environment.apiEndPoint+"/"+this.category.image;
    }
  }

 

}
