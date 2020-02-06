import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsActionPanelComponent } from './news-action-panel.component';

describe('NewsActionPanelComponent', () => {
  let component: NewsActionPanelComponent;
  let fixture: ComponentFixture<NewsActionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsActionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsActionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
