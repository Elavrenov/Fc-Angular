import { Component, OnInit, Input } from '@angular/core';
import { NewsApiUserService } from '../services/news-api-user-service';
import { NewsArticleModel } from '../models/news-article-model';

@Component({
  selector: 'app-news-main-item',
  templateUrl: './news-main-item.component.html',
  styleUrls: ['./news-main-item.component.scss']
})

export class NewsMainItemComponent implements OnInit {
  @Input() newsItem:NewsArticleModel;
  @Input() isEditTab;
  @Input() isUserArticle:boolean = false;


  constructor(private newsApiUserService:NewsApiUserService) {}

  ngOnInit() {
  }

  onDelete(target:NewsArticleModel){
    this.newsApiUserService.deleteUserArticleById(target.uid)
  }
}
