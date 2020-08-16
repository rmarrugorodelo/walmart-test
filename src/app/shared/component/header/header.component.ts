import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchformGroup: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.searchformGroup = new FormGroup({
      search: new FormControl(''),
    });
    this.searchformGroup.get('search').valueChanges.subscribe(value => {
      if (this.isValid(value)) {
        this.goProductRoute(value);
      }
    });
  }

  private goProductRoute(value: string) {
    this.router.navigate(['catalogue/search'], { queryParams: { query: value } });
  }

  private isValid(parameter: string) {
    return Number(parameter) || parameter.length > 3;
  }

}
