import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsApiHttpService } from '../services/news-api-http-service';
import { NewsItemModel } from '../models/news-item-model';
import { NewsArticleModel} from '../models/news-article-model';




@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss'],
  providers: [NewsApiHttpService]
})
export class NewsMainComponent implements OnInit {
  @Output() loadMore = new EventEmitter();

  sources: NewsItemModel[];
  articles: NewsArticleModel[];

  isEditTab = false;

  constructor(private newsApiService: NewsApiHttpService) { }

  ngOnInit() {
    this.newsApiService.getAllNewsPublishers().subscribe(data=>{this.sources = data});
    this.newsApiService.getNewsByPublisherId('abc-news-au').subscribe(data=>{this.articles = data});

  }

  onLoadMore(){
    console.log('Load more');
    //this.loadMore.emit(this.newsItem);
  }

  newsItems = [
    {
      picture:"pic1",
      title:"title1",
      info:"info1",
      date:"date1"
    },{
      picture:"pic2",
      title:"title2",
      info:"info2",
      date:"date2"
    },{
      picture:"pic3",
      title:"title3",
      info:"info3",
      date:"date3"
    },{
      picture:"pic4",
      title:"title4",
      info:"info4",
      date:"date4"
    },{
      picture:"pic5",
      title:"title5",
      info:"info5",
      date:"date5"
    },{
      picture:"pic6",
      title:"title6",
      info:"info6",
      date:"date6"
    }
  ]
}
