import { Component, OnInit,ViewChild } from '@angular/core';
import { NamePoolService } from '../shared/name-pool.service';
import { NameItem } from '../shared/name-item'
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SearchStatService } from '../shared/search-stat.service';
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

  constructor(private namePoolService:NamePoolService, public statService:SearchStatService){
    this.names = namePoolService.getNames();
    namePoolService.regisListener((names)=>{
        this.names = names;
    });

    console.log("stat service " + this.statService);
    

    // this.subject.subscribe({
    //   next(value){
    //     console.log("subject " + value);
    //     console.log("stat service " + this.statService);
    //   }
    // });

    // this.stream.subscribe({
    //   next(value){
    //     console.log("debounce " + value);
    //     console.log("stat service " + this.statService);
    //     // this.statService.addSearchText(value); 
    //     onDebounce(value);
    //   }
    // });
    this.stream.subscribe({
      next(value){
        let text = value["text"];
        let c = value["class"];
        console.log("debounce " + text);
        c.statService.addSearchText(text);
      }
    })

  }

  ngOnInit() {
  }
  
  next(value){
    console.log("debounce " + value);
  }
  onSearch(text){
    if(text != ""){
      console.log("onSearch " + text);
      this.names = this.namePoolService.search(text);
      this.subject.next({
        "text":text,
        "class":this
      });
    }
  }

  onDebounce(text){
    this.statService.addSearchText(text); 
  }
}

