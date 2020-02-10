import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsMainComponent } from './news-main/news-main.component';
import { NewsHeaderComponent } from './news-header/news-header.component';
import { NewsFooterComponent } from './news-footer/news-footer.component';
import { NewsMainItemComponent } from './news-main-item/news-main-item.component';
import { NewsItemEditFormComponent } from './news-item-edit-form/news-item-edit-form.component';
import { NewsMainContainerComponent } from './containers/news-main-container/news-main-container.component';
import { NewsEditContainerComponent } from './containers/news-edit-container/news-edit-container.component';
import { NewsActionPanelComponent } from './news-action-panel/news-action-panel.component';

import { NewsApiUserService } from './services/news-api-user-service';

@NgModule({
  declarations: [
    AppComponent,
    NewsMainComponent,
    NewsHeaderComponent,
    NewsFooterComponent,
    NewsMainItemComponent,
    NewsItemEditFormComponent,
    NewsMainContainerComponent,
    NewsEditContainerComponent,
    NewsActionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: NewsApiUserService, useValue: new NewsApiUserService() }],
  bootstrap: [AppComponent]
})
export class AppModule { }
