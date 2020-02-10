import { Component, OnInit } from '@angular/core';
import { NewsApiUserService } from '../../services/news-api-user-service';
import { NewsArticleModel, NewsArticleSource } from '../../models/news-article-model';
import { NewsArticleUserDtoModel } from '../../models/news-article-user-dto-model';


@Component({
  selector: 'app-news-edit-container',
  templateUrl: './news-edit-container.component.html',
  styleUrls: ['./news-edit-container.component.scss'],
  providers: [NewsApiUserService]
})

export class NewsEditContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
