import { Component, OnInit, Input, Output, EventEmitter, Directive } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { NewsApiUserService } from '../services/news-api-user-service';
import { NewsArticleModel } from '../models/news-article-model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news-main-item',
  templateUrl: './news-main-item.component.html',
  styleUrls: ['./news-main-item.component.scss'],
  providers:[NewsApiUserService]
})

export class NewsMainItemComponent implements OnInit {
  @Input() newsItem:NewsArticleModel;
  @Input() isEditTab;
  @Input() isUserArticle:boolean = false;
  @Output() onEditNewsArticle = new EventEmitter<NewsArticleModel>();

  private id: number;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
  }

  onEdit(target:NewsArticleModel){
    this.onEditNewsArticle.emit(target);
  }

  onDelete(target:NewsArticleModel){
    NewsApiUserService.deleteUserArticleById(target.source.id)
  }
}
