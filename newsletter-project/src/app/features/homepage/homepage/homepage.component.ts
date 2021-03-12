import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  //todo: add loader
  itemsList:Array<any>=[];         //todo: create model

  constructor() { }

  ngOnInit(): void {
    this.getDummyItems();
  }

  getDummyItems(){
    this.itemsList=[
      {
        icon:"question-circle",
        number:284,
        text:"lalalalla"
      },
      {
        icon:"question-circle",
        number:58,
        text:"lalalalla"
      },
      {
        icon:"question-circle",
        number:1352,
        text:"lalalalla"
      },
      {
        icon:"question-circle",
        number:7321,
        text:"lalalalla"
      },
    ]
  }

}
