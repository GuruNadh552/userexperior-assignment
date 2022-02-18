import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  fieldsData : any = ["#","Name","Code","Symbol"];
  currencyData : any;
  currencyDataKeys:any = [];
  constructor(private mainService:MainserviceService) { }

  ngOnInit(): void {

    this.getCurrecnyData();
    this.mainService.countryChangeSubject.subscribe(()=>{
       this.getCurrecnyData();
       console.log(this.mainService.activeCountryCode);
    })

  }

  getCurrecnyData(){
    if(this.mainService.activeCountryCode){
      let keys = Object.keys(this.mainService.currentCountryData[0].currencies);
      this.currencyDataKeys = keys;
      this.currencyData = this.mainService.currentCountryData[0].currencies;
    }
  }


}
