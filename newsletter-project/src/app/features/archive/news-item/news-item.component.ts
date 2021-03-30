import { Component, Input, OnInit } from '@angular/core';
import { ArchiveItem } from 'src/app/shared/models/ViewModels/archive';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() item:ArchiveItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
