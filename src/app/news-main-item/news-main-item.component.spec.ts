import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainItemComponent } from './news-main-item.component';

describe('NewsMainItemComponent', () => {
  let component: NewsMainItemComponent;
  let fixture: ComponentFixture<NewsMainItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMainItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
