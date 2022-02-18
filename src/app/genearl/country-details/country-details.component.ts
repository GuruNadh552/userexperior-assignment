import { MainserviceService } from './../../services/mainservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  fieldsData : any = ["Country Name","Capital","Region","Sub Region","Population","Area","Alpha3Code"];
  fieldValues: any = ["<name>","<Capital>","<Region>","<Sub Region>","<Population>","<Area>","<Alpha3Code>"];

  constructor(private mainService:MainserviceService) { }

  ngOnInit(): void {
    this.getAllDetails();
    this.mainService.countryChangeSubject.subscribe(()=>{
       this.getAllDetails();
       console.log("Called");
       console.log(this.mainService.activeCountryCode);
    })

  }

  getAllDetails(){
    if(this.mainService.activeCountryCode){
        const res :any = this.mainService.currentCountryData;
        this.fieldValues[0] = res[0].name.common;
        this.fieldValues[1] = res[0].capital[0];
        this.fieldValues[2] = res[0].region;
        this.fieldValues[3] = res[0].subregion;
        this.fieldValues[4] = res[0].population;
        this.fieldValues[5] = res[0].area;
        this.fieldValues[6] = res[0].cca3;
    }
  }

}
