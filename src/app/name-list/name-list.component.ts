import { Component, OnInit, Input } from '@angular/core';
import {NameItem} from '../shared/name-item';
@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent implements OnInit {
  @Input() major:String;
  @Input() names:NameItem[];
  constructor() { }

  ngOnInit() {
  }

}
