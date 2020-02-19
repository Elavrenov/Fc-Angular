import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsArticleUserDtoModel } from '../models/news-article-user-dto-model';
import { NewsArticleModel} from '../models/news-article-model';

import {Router} from "@angular/router"


@Component({
  selector: 'app-news-item-edit-form',
  templateUrl: './news-item-edit-form.component.html',
  styleUrls: ['./news-item-edit-form.component.scss']
})
export class NewsItemEditFormComponent implements OnInit {
  form: FormGroup;
  
  @Output() dtoArticleModel = new EventEmitter<NewsArticleUserDtoModel>();
  @Input() targetNewsArticle : NewsArticleModel;

  submitted:boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.targetNewsArticle){
      this.form = new FormGroup({
        heading: new FormControl(`${this.targetNewsArticle.title}`,Validators.compose([
          Validators.required
        ])),
        shortDescription: new FormControl(`${this.targetNewsArticle.description}`,Validators.compose([
          Validators.required
        ])),
        content: new FormControl(`${this.targetNewsArticle.content}`,Validators.compose([
          Validators.required
        ])),
        image: new FormControl(`${this.targetNewsArticle.urlToImage}`),
        date: new FormControl(`${this.targetNewsArticle.publishedAt}`),
        author: new FormControl(`${this.targetNewsArticle.author}`),
        sourceUrl: new FormControl(`${this.targetNewsArticle.url}`,Validators.compose([
          Validators.required,
          Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}')
        ]))
      });
    }else{
      this.form = new FormGroup({
        heading: new FormControl('',Validators.compose([
          Validators.required
        ])),
        shortDescription: new FormControl('',Validators.compose([
          Validators.required
        ])),
        content: new FormControl('',Validators.compose([
          Validators.required
        ])),
        image: new FormControl(''),
        date: new FormControl(''),
        author: new FormControl(''),
        sourceUrl: new FormControl('',Validators.compose([
          Validators.required,
          Validators.pattern('https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}')
        ]))
      });
    }    
  }

  get f() { return this.form.controls; }

  onSubmit(newsItem:any){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

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
