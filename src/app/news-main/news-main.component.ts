import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsApiHttpService } from '../services/news-api-http-service';
import { NewsItemModel } from '../models/news-item-model';



@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrls: ['./news-main.component.scss'],
  providers: [NewsApiHttpService]
})
export class NewsMainComponent implements OnInit {
  @Output() loadMore = new EventEmitter();

  sources: NewsItemModel[];

  x:any;

  isEditTab = false;

  constructor(private newsApiService: NewsApiHttpService) { }

  ngOnInit() {
    this.x =  this.newsApiService.getAllNews().subscribe(data=>{this.sources = data});

    console.log(this.x);
    console.log(this.sources);
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
