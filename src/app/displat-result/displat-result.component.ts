import { Component, OnInit, ViewChild } from '@angular/core';
import { NamePoolService } from '../shared/name-pool.service';
import { NameItem } from '../shared/name-item'
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-displat-result',
  templateUrl: './displat-result.component.html',
  styleUrls: ['./displat-result.component.scss']
})
export class DisplatResultComponent implements OnInit {
  @ViewChild("searchForm") searchFrom;
  title = 'app';
  names:NameItem[];

  searchStream$ = Observable.fromEvent(this.searchFrom, "searchSubmit");

  constructor(private namePoolService:NamePoolService){
    this.names = namePoolService.getNames();
    namePoolService.regisListener((names)=>{
        this.names = names;
    });

    this.searchStream$.subscribe({
      next(value){
        console.log(value);
      },
      error(error){
        console.log(error);
      }
    });
  }

  ngOnInit() {
  }
  
  onSearch(text){
    console.log("onSearch " + text);
    this.names = this.namePoolService.search(text);
  }
}

