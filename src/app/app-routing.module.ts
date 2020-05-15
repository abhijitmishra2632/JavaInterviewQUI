import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ViewQuestionComponent } from './view-question/view-question.component';

const routes: Routes = [
  { path: 'viewquestion', component: ViewQuestionComponent },
  { path: 'addquestion', component: AddQuestionComponent },
  { path: '',   redirectTo: '/viewquestion', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
