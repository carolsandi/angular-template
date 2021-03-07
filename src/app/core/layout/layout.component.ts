import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() { }

  collapse: boolean;

  ngOnInit(): void {
    this.collapse = this.isMobileMenu();
  }

  toggleCollapse() {
    this.collapse = !this.collapse
  }

  isMobileMenu() {
    return $(window).width() < 991;
  }
}
