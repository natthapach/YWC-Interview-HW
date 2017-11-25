import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import { AngularFireList, AngularFireObject } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchText:string = "";
  @Output() searchSubmit = new EventEmitter();
  item: AngularFireList<any>;

  constructor(private db:AngularFireDatabase) { }

  ngOnInit() {
  }

  onSearch(event){
    event.preventDefault();
    console.log(this.searchText);
    this.searchSubmit.emit(this.searchText);
  }

  onClickBtn(event){
    event.preventDefault();
    let subscription = this.db.object("search").snapshotChanges().subscribe(action=>{
      let data = action.payload.val();
      let n = data[this.searchText];
      console.log("n ", n);
      if(!n){
        this.db.object("search").update({[this.searchText]:1});
      }else{
        this.db.object("search").update({[this.searchText]:++n});
      }
      subscription.unsubscribe();
    });
    // let data = {};
    // let text = this.searchText;
    // data[this.searchText] = "1";
    // this.db.object("search").update(data);
  
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
