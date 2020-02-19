import { Component, OnInit } from '@angular/core';
import { NewsApiUserService } from '../../services/news-api-user-service';
import { NewsArticleModel, NewsArticleSource } from '../../models/news-article-model';
import { NewsArticleUserDtoModel } from '../../models/news-article-user-dto-model';
import { NewsPublisherItemModel } from '../../models/news-item-model';
import { Router } from '@angular/router';
import { NewsApiInternalService } from '../../services/news-api-internal-service';

@Component({
  selector: 'app-news-edit-container',
  templateUrl: './news-edit-container.component.html',
  styleUrls: ['./news-edit-container.component.scss']
})

export class NewsEditContainerComponent implements OnInit {
  targetArticle:NewsArticleModel;
  publisherName:string;
  publishersList:NewsPublisherItemModel[]=[];
  isNewsListVisible:boolean = false;


  constructor(private router:Router,
              private apiDecorator:NewsApiInternalService,
              private newsApiUserService:NewsApiUserService) { }

  ngOnInit() {
    debugger;
    const articeId:string =this.router.url.slice(6);

    this.targetArticle = this.apiDecorator.getArticleById(articeId);

    if(this.targetArticle){
      this.publisherName = this.targetArticle.title;
    }else{
      this.publisherName = 'Custom editor';
    }
  }


  createNewArticle(dtoModel:NewsArticleUserDtoModel){
    const artilce = new NewsArticleModel();
    artilce.author = dtoModel.author;
    artilce.source = new NewsArticleSource();
    artilce.source.name = dtoModel.heading
    artilce.content = dtoModel.content;
    artilce.urlToImage = dtoModel.image;
    artilce.title= dtoModel.heading;
    artilce.description = dtoModel.shortDescription;
    artilce.uid = dtoModel.uid;

    this.newsApiUserService.createArticle(artilce);
  }
}
