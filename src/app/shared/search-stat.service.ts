import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SearchStatService {

  constructor(private db:AngularFireDatabase) { }

  addSearchText(searchText:string):void{
    let subscription = this.db.object("search").snapshotChanges().subscribe(action=>{
      let data = action.payload.val();
      let n = data[searchText];
      if(!n){
        this.db.object("search").update({[searchText]:1});
      }else{
        this.db.object("search").update({[searchText]:++n});
      }
      subscription.unsubscribe();
    });  
  }

}
