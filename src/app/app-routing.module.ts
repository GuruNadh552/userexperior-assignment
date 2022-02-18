import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    loadChildren : () => import('./genearl/country-details/country-details.module').then(m => m.CountryDetailsModule)
  },
  {
    path : 'language-list',
    pathMatch:'full',
    loadChildren : () => import('./genearl/language-list/language-list.module').then(m => m.LanguageListModule)
  },
  {
    path : 'currency-list',
    pathMatch:'full',
    loadChildren : () => import('./genearl/currency-list/currency-list.module').then(m => m.CurrencyListModule)
  },
  {
    path:"**",
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
