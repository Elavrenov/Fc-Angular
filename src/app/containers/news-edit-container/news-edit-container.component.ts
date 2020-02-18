import { Component, OnInit } from '@angular/core';
import { NewsApiUserService } from '../../services/news-api-user-service';
import { NewsArticleModel, NewsArticleSource } from '../../models/news-article-model';
import { NewsArticleUserDtoModel } from '../../models/news-article-user-dto-model';
import { NewsArticleTransferService } from '../../services/news-article-transfer-service';
import { NewsPublisherItemModel } from '../../models/news-item-model';




@Component({
  selector: 'app-news-edit-container',
  templateUrl: './news-edit-container.component.html',
  styleUrls: ['./news-edit-container.component.scss'],
  providers: [NewsApiUserService,NewsArticleTransferService]
})

export class NewsEditContainerComponent implements OnInit {
  targetArticle:NewsArticleModel;
  publisherName:string;
  publishersList:NewsPublisherItemModel[]=[];

  constructor() { }

  ngOnInit() {
    this.targetArticle = NewsArticleTransferService.getCurrentArticle();
    if(this.targetArticle){
      this.publisherName = this.targetArticle.title;
      this.publishersList[0]= new NewsPublisherItemModel();
      this.publishersList[0].name = this.targetArticle.source.name;
    }else{
      this.publisherName = 'Custom editor';
      this.publishersList[0]= new NewsPublisherItemModel();
      this.publishersList[0].name = 'Created by user';
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

    NewsApiUserService.createArticle(artilce);
  }
}
