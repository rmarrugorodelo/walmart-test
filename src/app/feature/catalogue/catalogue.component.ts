import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  template: `<div class="app-container"><router-outlet></router-outlet></div>`,
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
