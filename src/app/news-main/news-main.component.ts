import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsArticleModel} from '../models/news-article-model';
import { NewsApiInternalService } from '../services/news-api-internal-service';


@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss']
})
export class NewsMainComponent implements OnInit {
  @Output() loadMore = new EventEmitter();
  @Input() publisherId:string;
  @Input() filteredData:NewsArticleModel[];
  @Input() isUserArticle:boolean = false;

  articles: NewsArticleModel[];

  isEditTab = false;

  constructor(private apiDecorator:NewsApiInternalService) { }

  ngOnInit() {

  }

  ngOnChanges(){
    if(this.publisherId){
      (()=>this.apiDecorator.getArticlesByPubliherId(this.publisherId).then((x:NewsArticleModel[])=> this.articles = x))();
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
