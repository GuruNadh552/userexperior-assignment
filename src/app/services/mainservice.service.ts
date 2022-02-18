import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainserviceService {
  activeCountryCode: any = '';
  currentCountryData: any = [];
  countryChangeSubject: any = new Subject<any>();

  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountryDetails() {
    return this.http.get(
      `https://restcountries.com/v3.1/alpha/${this.activeCountryCode}`
    );
  }

  getCurrentCountryData() {
    this.getCountryDetails().subscribe(
      (res) => {
        this.currentCountryData = res;
      },
      (err) => {},
      () => {
        this.countryChangeSubject.next();
      }
    );
  }
}
