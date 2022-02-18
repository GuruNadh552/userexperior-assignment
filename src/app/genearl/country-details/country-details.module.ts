import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountryDetailsComponent } from './country-details.component';

const routes: Routes = [
  {
    path:'',
    component:CountryDetailsComponent
  }
];

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountryDetailsModule { }
