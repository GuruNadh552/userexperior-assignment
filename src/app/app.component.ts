import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userexperior';
  data:any = [
    {
      name:'Home',
      icon:'home',
      link:''
    },
    {
      name:'Language List',
      icon:'bookmark',
      link:'language-list'
    },
    {
      name:'Currency List',
      icon:'book',
      link:'currency-list'
    }
  ]
}
