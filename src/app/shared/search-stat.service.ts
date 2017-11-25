import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { StatItem } from './stat-item';
import { AngularFireObject } from 'angularfire2/database/interfaces';

@Injectable()
export class SearchStatService {
  private listener;
  private stats:StatItem[] = [];
  private total = 0;
  constructor(private db:AngularFireDatabase) { 
    let item:AngularFireObject<Object> = this.db.object("search");
    item.snapshotChanges().subscribe(action=>{
      this.stats = [];
      this.total = 0;
      let data = action.payload.val();
      for(let key in data){
        console.log(key + ":" + data[key]);
        let stat = new StatItem(key, data[key]);
        this.stats.push(stat);
        this.total += data[key];
      }
      if(this.listener){
        this.listener({
          "stats":this.stats,
          "total":this.total
        });
      }
    });
  }

  public addSearchText(searchText:string){
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

  getStats(){
    return this.stats;
  }

  getTotal(){
    return this.total;
  }

  regisListener(listener){
    this.listener = listener;
  }

}
