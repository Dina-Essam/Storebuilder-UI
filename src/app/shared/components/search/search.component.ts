import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  search: string = '';
  constructor(
    private store : StoreService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.store.subscription('search')
      .subscribe(
        (res: string) => {
          this.search = res;
        }
      )
  }
  searchProduct(): void {
    //console.log( this.search)
  }
}
