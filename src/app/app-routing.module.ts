import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsMainContainerComponent } from './containers/news-main-container/news-main-container.component';
import { NewsEditContainerComponent } from './containers/news-edit-container/news-edit-container.component';


const routes: Routes = [
  {path: '', component: NewsMainContainerComponent},
  {path: 'edit', component: NewsEditContainerComponent, pathMatch:'full'},
  {path: 'edit/:id', component: NewsEditContainerComponent},
  {path: '**',   redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
