import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NewsMainComponent } from './news-main/news-main.component';
import { NewsItemEditFormComponent } from './news-item-edit-form/news-item-edit-form.component';


const routes: Routes = [
  {path: 'edit', component: NewsItemEditFormComponent},
  {path: ':medium', component: NewsMainComponent},
  {path: '', pathMatch:'full', redirectTo:'all'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
