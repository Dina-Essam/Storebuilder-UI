import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../components/header/header.component";
import {FooterComponent} from "../components/footer/footer.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {SideMenuComponent} from "../components/side-menu/side-menu.component";
import { SearchComponent } from '../components/search/search.component';
import {SharedModule} from "./shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideMenuComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    SideMenuComponent,
    SearchComponent,
    SharedModule
  ]
})
export class LayoutModule { }
