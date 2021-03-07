import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  openItem = '';
  openSubItem = '';

  ngOnInit(): void {
  }

  toggleItem(item) {
    this.openItem = this.openItem == item ? '' : item;
    this.openSubItem = this.openItem == '' ? '' : this.openSubItem;
  }

  toggleSubItem(item) {
    this.openSubItem = this.openSubItem == item ? '' : item;
  }

}
