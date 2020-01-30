import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-main-item',
  templateUrl: './news-main-item.component.html',
  styleUrls: ['./news-main-item.component.scss']
})
export class NewsMainItemComponent implements OnInit {
  @Input() newsItem;
  @Input() isEditTab;

  constructor() { }

  ngOnInit() {
  }

  onEdit(target){
    this.isEditTab = true;
    console.log(this.isEditTab);

    console.log(target);
  }

  onDelete(target){
    console.log(target);
  }
}
