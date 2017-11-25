import { Component, OnInit } from '@angular/core';
import { SearchStatService } from '../shared/search-stat.service';
import { StatItem } from '../shared/stat-item';

@Component({
  selector: 'app-display-stat',
  templateUrl: './display-stat.component.html',
  styleUrls: ['./display-stat.component.scss']
})
export class DisplayStatComponent implements OnInit {
  private stats:StatItem[] = [];
  private total:number = 0;
  constructor(private statService:SearchStatService) {
    this.statService.regisListener((statsInfo)=>{
      this.stats = statsInfo["stats"];
      this.total = statsInfo["total"];
    });
  }

  ngOnInit() {
  }

}
