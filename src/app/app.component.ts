import { Component } from '@angular/core';
import { NamePoolService } from './shared/name-pool.service';
import { NameItem } from './shared/name-item'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  names:NameItem[];

  constructor(private namePoolService:NamePoolService){
    this.names = namePoolService.getNames();
    namePoolService.regisListener((names)=>{
        this.names = names;
    });
  }

  onSearch(text){
    console.log("onSearch " + text);
    this.names = this.namePoolService.search(text);
  }
}
