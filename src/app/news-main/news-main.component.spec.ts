import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsMainComponent } from './news-main.component';
import { NewsApiInternalService } from '../services/news-api-internal-service';
import { NewsMainItemComponent } from '../news-main-item/news-main-item.component';
import { ArticleDescriptionPipe } from '../pipes/article-description-pipe';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';

describe('NewsMainComponent', () => {
  let component: NewsMainComponent;
  let fixture: ComponentFixture<NewsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMainComponent,NewsMainItemComponent,ArticleDescriptionPipe, RouterLink],
      imports:[StorageServiceModule],
      providers:[NewsApiInternalService,HttpClient,HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as isEditTab 'false'`, () => {
    expect(component.isEditTab).toEqual(false);
 });

});
