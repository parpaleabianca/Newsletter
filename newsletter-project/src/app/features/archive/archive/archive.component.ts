import { Component, OnInit } from '@angular/core';
import { ArchiveItem } from 'src/app/shared/models/ViewModels/archive';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
})
export class ArchiveComponent implements OnInit {
  newsletterArchive: Array<ArchiveItem> = new Array<ArchiveItem>();

  yearsList:Array<any>= [];
  selectedYear:number= 2020;

  constructor() {}

  ngOnInit(): void {
    this.getDummyElem();
    this.getYearsList();
  }

  changedYear(){
    //todo: request
  }

  getYearsList(){
    let currentYear= new Date().getFullYear();
    for(let year=currentYear; year>=2018; year--){
      this.yearsList.push(year)
    }
  }

  getDummyElem() {
    this.newsletterArchive = [
      {
        date: 'December 2020',
        description:
          'WIRAC win restores DACA, Veterans Clinic Secures Major Settlement, and more.',
        pdf:
          'https://www.unitbv.ro/images/newsletter/2020/NL_decembrie_2020_RO.pdf',
      },
      {
        date: 'November 2020',
        description:
          'The Law School Access Program, The Millstone Fund for Criminal Justice Reform, Clinic news, Upcoming virtual events, and more.',
        pdf:
          'https://www.unitbv.ro/images/newsletter/2020/NL_Noiembrie_2020_RO.pdf',
      },
      {
        date: 'October 2020',
        description:
          'Welcoming the Class of 2023, Yale Law School News, The Courtyard celebrates first birthday.',
        pdf:
          'https://www.unitbv.ro/images/newsletter/2020/NL_octombrie_2020_RO.pdf',
      },
    ];
  }
}
