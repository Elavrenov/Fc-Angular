import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsApiHttpService } from '../services/news-api-http-service';
import { NewsPublisherItemModel } from '../models/news-item-model';
import { NewsArticleModel} from '../models/news-article-model';




@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss'],
  providers: [NewsApiHttpService]
})
export class NewsMainComponent implements OnInit {
  @Output() loadMore = new EventEmitter();
  @Input() publisherId:string;
  @Input() filteredData:NewsArticleModel[];
  @Input() isUserArticle:boolean = false;

  articles: NewsArticleModel[];

  isEditTab = false;

  constructor(private newsApiService: NewsApiHttpService) { }

  ngOnInit() {

  }

  ngOnChanges(){
    if(this.publisherId){
      this.newsApiService.getNewsByPublisherId(this.publisherId).subscribe(data=>{this.articles = data});
      return;
    }

    if(this.filteredData){
      this.articles = this.filteredData;
    }
  }

  onLoadMore(){
    console.log('Load more');
  }
}
