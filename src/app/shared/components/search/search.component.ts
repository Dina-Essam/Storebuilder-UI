import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import { MessageService } from 'primeng/api';
import { ProductService } from '../../services/product.service';
import {StoreService} from "../../services/store.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {
  search: string = '';
  displayResult: boolean = false
  searchResult:Array<any>=[];
  productId:number=0;
  constructor(
    private store : StoreService,private productService:ProductService, 
       private messageService: MessageService,private router: Router) { }

  @Output() onResult: EventEmitter<boolean> = new EventEmitter()
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

  searchProduct(event: any): void {
    if(event.target.value)
    {
     this.productService.FilterWithProductName(event.target.value).subscribe({
      next: (res: any) => {
   console.log("filter",res.data.records)
        this.searchResult=res.data.records;
        this.showResultPopUp(true)
     },
     error: (err: any) => {
       this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
     },
     complete: () => console.log('Filter')
     });
    }
    //console.log( this.search)
  }
  showResultPopUp(show: boolean): void {
    this.displayResult = show
    this.onResult.emit(this.displayResult)
  }

  NavigateToProduct(productId:any){
    this.showResultPopUp(false);
    this.router.navigate(['product', productId])

 }

}
