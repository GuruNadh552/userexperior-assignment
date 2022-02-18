import { Component, OnInit } from '@angular/core';
import { MainserviceService } from 'src/app/services/mainservice.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  fieldsData : any = ["#","Name","Code"];
  langData : any;
  langDataKeys:any = [];
  constructor(private mainService:MainserviceService) { }

  ngOnInit(): void {

    this.getLangData();
    this.mainService.countryChangeSubject.subscribe(()=>{
       this.getLangData();
       console.log(this.mainService.activeCountryCode);
    })

  }

  getLangData(){
    if(this.mainService.activeCountryCode){
      let keys = Object.keys(this.mainService.currentCountryData[0].languages);
      this.langDataKeys = keys;
      this.langData = this.mainService.currentCountryData[0].languages;
    }
  }

}
