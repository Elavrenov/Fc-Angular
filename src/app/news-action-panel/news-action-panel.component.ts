import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsApiUserService } from '../services/news-api-user-service';
import { NewsPublisherItemModel } from '../models/news-item-model';

@Component({
  selector: 'app-news-action-panel',
  templateUrl: './news-action-panel.component.html',
  styleUrls: ['./news-action-panel.component.scss']
})
export class NewsActionPanelComponent implements OnInit {
  @Input() publishersList:NewsPublisherItemModel[];
  @Output() onChanged = new EventEmitter<string>();
  @Input() sourceName:string;
  @Output() onFilterChanges = new EventEmitter<string>();
  @Output() viewUserArticles = new EventEmitter<boolean>();
  filterQuery:string;
  userArticlesCheckbox:boolean = false;


  constructor() { }

  ngOnInit() {
  
  }

  onPublisherChange = (e:any) => {
    this.onChanged.emit(e.target.value);
    
  };

  resetFilterQuery(e:any){
    this.filterQuery= e.target.value; 
  }

  onFilterChange = () =>{
    this.onFilterChanges.emit(this.filterQuery);
    this.filterQuery= ''; 
  } 

  getUserArticles(){
    this.userArticlesCheckbox = !this.userArticlesCheckbox;
    this.viewUserArticles.emit(this.userArticlesCheckbox);
  }
}
