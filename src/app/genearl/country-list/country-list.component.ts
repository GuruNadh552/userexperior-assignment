import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  loader:boolean=true;
  countries:any = [];

  constructor(private mainServie:MainserviceService) { }

  ngOnInit(): void {
     this.getAllCountries();
  }

  getAllCountries(){
    this.mainServie.getAllCountries().subscribe((res)=>{
      console.log(res);
      this.countries = res;
    },(err)=>{},()=>{
      this.loader = false;
    })
  }

  getDetails(event:any){
    console.log(event.target.value);
    this.mainServie.activeCountryCode = event.target.value;
    this.mainServie.getCurrentCountryData();
  }

}
