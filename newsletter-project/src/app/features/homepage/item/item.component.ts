import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    // console.log(this.item)
  }

}
