import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-main-item',
  templateUrl: './news-main-item.component.html',
  styleUrls: ['./news-main-item.component.scss']
})
export class NewsMainItemComponent implements OnInit {
  @Input() newsItem;
  
  constructor() { }

  ngOnInit() {
  }

}
