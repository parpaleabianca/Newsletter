import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchInput:string="";
  isSearchVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  cleanSearchInput(){
    console.log("clear")
  }

  search(){
    console.log("search")
  }
}
