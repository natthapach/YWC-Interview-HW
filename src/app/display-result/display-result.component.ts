import { Component, OnInit,ViewChild } from '@angular/core';
import { NamePoolService } from '../shared/name-pool.service';
import { NameItem } from '../shared/name-item'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.scss']
})
export class DisplayResultComponent implements OnInit {
  @ViewChild("searchForm") searchFrom;
  title = 'app';
  names:NameItem[];

  subject = new Subject();

  // searchStream$ = Observable.fromEvent(this.searchFrom, "searchSubmit");
  stream = this.subject.debounceTime(3000);

  constructor(private namePoolService:NamePoolService){
    this.names = namePoolService.getNames();
    namePoolService.regisListener((names)=>{
        this.names = names;
    });

    this.subject.subscribe({
      next(value){
        console.log("subject " + value);
      }
    })
    this.stream.subscribe({
      next(value){
        console.log("debounce " + value);
      }
    })

  }

  ngOnInit() {
  }
  
  onSearch(text){
    console.log("onSearch " + text);
    this.names = this.namePoolService.search(text);
    this.subject.next(text);
  }
}

