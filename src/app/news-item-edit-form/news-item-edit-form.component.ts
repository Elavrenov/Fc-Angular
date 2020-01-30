import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-news-item-edit-form',
  templateUrl: './news-item-edit-form.component.html',
  styleUrls: ['./news-item-edit-form.component.scss']
})
export class NewsItemEditFormComponent implements OnInit {
  form: FormGroup;

  constructor() { }

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

  onSubmit(newsItem){
    console.log(newsItem);
  }
}
