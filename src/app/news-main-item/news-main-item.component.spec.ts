import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainItemComponent } from './news-main-item.component';
import { ArticleDescriptionPipe } from '../pipes/article-description-pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageServiceModule } from 'angular-webstorage-service';

describe('NewsMainItemComponent', () => {
  let component: NewsMainItemComponent;
  let fixture: ComponentFixture<NewsMainItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMainItemComponent,ArticleDescriptionPipe],
        imports:[RouterTestingModule.withRoutes([]),StorageServiceModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMainItemComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
