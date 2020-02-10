import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewsArticleUserDtoModel } from '../models/news-article-user-dto-model';
import {Router} from "@angular/router"


@Component({
  selector: 'app-news-item-edit-form',
  templateUrl: './news-item-edit-form.component.html',
  styleUrls: ['./news-item-edit-form.component.scss']
})
export class NewsItemEditFormComponent implements OnInit {
  form: FormGroup;
  @Output() dtoArticleModel = new EventEmitter<NewsArticleUserDtoModel>();

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      heading: new FormControl(''),
      shortDescription: new FormControl(''),
      content: new FormControl(''),
      image: new FormControl(''),
      date: new FormControl(''),
      author: new FormControl(''),
      sourceUrl: new FormControl('')
    });
  }

  onSubmit(newsItem:any){
    const dto = new NewsArticleUserDtoModel();
    dto.heading = newsItem.heading;
    dto.author = newsItem.author;
    dto.shortDescription = newsItem.shortDescription;
    dto.content = newsItem.content;
    dto.image = newsItem.image;
    dto.date = newsItem.date;
    dto.sourceUrl = newsItem.sourceUrl;

    this.dtoArticleModel.emit(dto);
    this.router.navigate(['']);
  }
}
