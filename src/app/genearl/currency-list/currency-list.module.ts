import { CurrencyListComponent } from './currency-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:CurrencyListComponent
  }
];

@NgModule({
  declarations: [CurrencyListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CurrencyListModule { }
