import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemEditFormComponent } from './news-item-edit-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('NewsItemEditFormComponent', () => {
  let component: NewsItemEditFormComponent;
  let fixture: ComponentFixture<NewsItemEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemEditFormComponent],
      imports:[ReactiveFormsModule, FormsModule, RouterTestingModule.withRoutes([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemEditFormComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('url field validity', () => {
    let url = component.form.controls['sourceUrl'];
    expect(url.valid).toBeFalsy();
  });
  it('heading field validity', () => {
    let heading = component.form.controls['heading'];
    expect(heading.valid).toBeFalsy();
  });
  it('shortDescription field validity', () => {
    let shortDescription = component.form.controls['shortDescription'];
    expect(shortDescription.valid).toBeFalsy();
  });
  it('content field validity', () => {
    let content = component.form.controls['content'];
    expect(content.valid).toBeFalsy();
  });

  it('url field validity', () => {
    let errors = {};
    let url = component.form.controls['sourceUrl'];
    errors = url.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('heading field validity', () => {
    let errors = {};
    let heading = component.form.controls['heading'];
    errors = heading.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('shortDescription field validity', () => {
    let errors = {};
    let shortDescription = component.form.controls['shortDescription'];
    errors = shortDescription.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  it('content field validity', () => {
    let errors = {};
    let content = component.form.controls['content'];
    errors = content.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('submitting a form', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['heading'].setValue("HELLO");
    component.form.controls['shortDescription'].setValue("HELLO");
    component.form.controls['content'].setValue("HELLO");
    component.form.controls['sourceUrl'].setValue("https://abcnews.go.com");
    expect(component.form.valid).toBeTruthy();
  });

  it('submitting a form with incoorect url', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['heading'].setValue("HELLO");
    component.form.controls['shortDescription'].setValue("HELLO");
    component.form.controls['content'].setValue("HELLO");
    component.form.controls['sourceUrl'].setValue("https://ab");
    expect(component.form.valid).toBeFalsy();
  });
});
