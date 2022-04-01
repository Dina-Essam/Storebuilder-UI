import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  password: string = "fgfdgsdfesf";
  constructor() { }
  displayApprovedModal: boolean = false;
  ngOnInit(): void {
  }
  approveModal() {
    this.displayApprovedModal = true;
  }

}
