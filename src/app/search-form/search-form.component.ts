import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';
import { SearchStatService } from '../shared/search-stat.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchText:string = "";
  @Output() searchSubmit = new EventEmitter();
  item: AngularFireList<any>;

  constructor(private db:AngularFireDatabase, private state:SearchStatService) {
  }

  ngOnInit() {
  }

  onSearch(event){
    event.preventDefault();
    console.log(this.searchText);
    this.searchSubmit.emit(this.searchText);
  }

  onClickBtn(event){
    event.preventDefault();
    this.state.addSearchText(this.searchText);
    console.log("onClick");
  }

  onClickShow(event){
    let item:AngularFireObject<Object> = this.db.object("search");
    
    item.snapshotChanges().subscribe(action=>{
      let data = action.payload.val();
      console.log(action.payload.val());
      console.log(typeof data);
    })
    
  }
  
}
