import {AfterViewInit, Component, OnInit} from '@angular/core';
import {StoreService} from '../../../../shared/services/store.service';
import {MainDataService} from '../../../../shared/services/main-data.service';
import {ProductService} from '../../../../shared/services/product.service';
import {HomeService} from '../../services/home.service';
import {Section} from '../../../../interfaces/section';
import {Product} from "../../../../interfaces/product";
import {Category} from "../../../../interfaces/category";
import {MessageService} from 'primeng/api';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
  sections: Array<Section> = [];
  mainSlider: Array<any> = [];
  showRoomConfig: Array<any> = [];
  categories: Array<Category> = [];
  baseUrl:String='';

  constructor(
    private store: StoreService,
    private mainDataService: MainDataService,
    private homeService: HomeService,
    private productService: ProductService,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.getSectionMapping();
    // this.getMainData();
    // this.getMainSliderData();
   this.getMainSliderData();
   this.baseUrl = `${environment.apiEndPoint}/`;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // Listen To Store Service For any change on categories
      this.store.subscription('categories')
        .subscribe({
          next: (res: any) => {
            this.categories = res

          },
          error: (err: any) => {
            console.error(err);
          }
        });
    }, 1)
  }

  getSectionMapping(): void {
    this.store.set("loading",true);
    this.homeService.getSectionMapping()
      .subscribe({
        next: (res: any) => {

          console.log("mapping",res)
          this.sections = res.data.records
          this.store.set("loading",false);
          this.loadSectionData();
        },
        error: (err: any) => {
          this.store.set("loading",false);
          console.error(err);
          this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
        },
        complete: () => console.log('Section complete')
      });
  }

  loadSectionData(): void {
    for (let section of this.sections) {
      if(section.showRoomTypeId==3)
      {
          section.data=this.categories
        }
        if(section.showRoomTypeId==2)
        {
          this.productService.getCategoryProducts(section.categoryId,section.topNumber)
          .subscribe({
            next: (res: any) => {

               if(res?.data?.length>0)
               {
               section.data=res.data;
               console.log(res.data);
              section.title=res.data[0].categoryName
              section.count=section.data.length;
               }

            },
            error: (err: any) => {
              console.error(err);
              this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
            },
            complete: () => console.log('get products complete')
          });
        }
        if(section.bannerId)
        {
          this.store.set("loading",true);
            this.homeService.getBanners(section.bannerId).subscribe({
              next: (res: any) => {
                section.bannerData=res.data;
                this.store.set("loading",false);

              },
              error: (err: any) => {
                console.error(err);
                this.store.set("loading",false);

                this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
              },
              complete: () => console.log('get banner complete')
            });
        }
    }
  }

  getMainSliderData(): void {
    this.homeService.getMainSliders({})
      .subscribe({
        next: (res: any) => {
         var base= this.baseUrl;
          Object.keys(res.data.records).forEach(function (k) {
            res.data.records[k].imageUrl= base + res.data.records[k].imageUrl;
          });
          this.mainSlider.push(...res.data.records)
        },
        error: (err: any) => {
          console.error(err);
          this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
        },
        complete: () => console.log('get sliders complete')
      });
  }

  getCategoryProducts(id: number,number:number ): Array<any> {
    this.productService.getCategoryProducts(id,number)
      .subscribe({
        next: (res: any) => {
          return res.data;

        },
        error: (err: any) => {
          console.error(err);
          this.messageService.add({severity: 'error', summary: 'Fetch Error', detail: err.message});
        },
        complete: () => console.log('get products complete')
      });
      return new Array<any>();
  }

  getBanners(data: any): void {
    data = 'https://k.nooncdn.com/cms/pages/20211227/80250376363dbe9d3ab2968eea261fbb/ar_banner-01.png'
  }

}
