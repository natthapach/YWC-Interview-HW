import { Component, OnInit, Input } from '@angular/core';
import { NameItem } from '../shared/name-item';
@Component({
  selector: 'app-name-info',
  templateUrl: './name-info.component.html',
  styleUrls: ['./name-info.component.scss']
})
export class NameInfoComponent implements OnInit {
  @Input() name:NameItem;
  constructor() { }

  ngOnInit() {
  }

}
