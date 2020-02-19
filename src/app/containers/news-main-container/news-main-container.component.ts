import { Component, OnInit } from '@angular/core';
import { NewsApiHttpService } from '../../services/news-api-http-service';
import { NewsApiUserService } from '../../services/news-api-user-service';
import { NewsPublisherItemModel } from '../../models/news-item-model';
import { NewsArticleModel } from '../../models/news-article-model';


@Component({
  selector: 'app-news-main-container',
  templateUrl: './news-main-container.component.html',
  styleUrls: ['./news-main-container.component.scss']
})

export class NewsMainContainerComponent implements OnInit {

  publishersList:NewsPublisherItemModel[];
  publisherId:string;
  publisherName:string;
  filteredData:NewsArticleModel[];
  defaultPublisherId:string;
  defaultPublisherName:string;
  isUserArticle:boolean;

  constructor(
    private newsApiService:NewsApiHttpService,
    private newsApiUserService:NewsApiUserService) { }

  ngOnInit() {
    this.newsApiService.getAllNewsPublishers().subscribe(data=>{
      this.publishersList = data;
      this.publisherId = data[0].id;
      this.defaultPublisherId = this.publisherId;
      this.publisherName = data[0].name;
      this.defaultPublisherName = this.publisherName;
    });
  }
  
  getFilteredArticles(query:string){
    this.newsApiService.getNewsByKeyword(query).subscribe(data=>{
      this.filteredData = data;
      this.publisherId = null;
      this.publisherName = `Filter: '${query}'`;
    });
  }

  getUserArticles(flag:boolean){
    if(flag){
      this.isUserArticle = flag;
      this.filteredData = this.newsApiUserService.getAllUserArticles();
      this.publisherId = null;
      this.publisherName = `User articles`;
    }else{
      this.isUserArticle = flag;
      this.publisherId = this.defaultPublisherId;
      this.publisherName = this.defaultPublisherName;
    }
  }

  onActionPanelChanged = (e:string) => {
    this.publisherId = e;
    this.publisherName = this.publishersList.find(x => x.id == e).name;
  };

}
