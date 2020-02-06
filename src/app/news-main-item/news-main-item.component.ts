import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-news-main-item',
  templateUrl: './news-main-item.component.html',
  styleUrls: ['./news-main-item.component.scss']
})
export class NewsMainItemComponent implements OnInit {
  @Input() newsItem;
  @Input() isEditTab;
  
  private id: number;
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit() {
  }

  onEdit(target){
    this.isEditTab = true;
    console.log(this.isEditTab);

    console.log(target);
  }

  onDelete(target){
    console.log(target);
  }
}
