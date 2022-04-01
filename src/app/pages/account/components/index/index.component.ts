import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../../shared/services/store.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private store: StoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() : void {
    this.store.set('authToken', '');
    this.store.set('profile', '');
    this.router.navigate(['/']);
  }
}
