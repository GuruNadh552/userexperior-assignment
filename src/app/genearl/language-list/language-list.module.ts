import { LanguageListComponent } from './language-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path:'',
    component:LanguageListComponent
  }
];

@NgModule({
  declarations: [LanguageListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LanguageListModule { }
