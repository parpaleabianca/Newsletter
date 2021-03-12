import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchInput:string="";
  isSearchVisible: boolean = false;

  constructor(private router:Router) { }

  cleanSearchInput(){
    console.log("clear")
  }

  search(){
    console.log("search")
  }

  checkUrl(selectedRoute:string):boolean{
    return this.router.url.includes(selectedRoute)
  }


}
