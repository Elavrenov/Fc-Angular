import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemEditFormComponent } from './news-item-edit-form.component';

describe('NewsItemEditFormComponent', () => {
  let component: NewsItemEditFormComponent;
  let fixture: ComponentFixture<NewsItemEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
