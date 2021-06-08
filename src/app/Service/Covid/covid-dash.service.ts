import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDashService {

  /* URL_stateDaily = "https://api.covid19india.org/states_daily.json";
  URL_stateDistrict = "https://api.covid19india.org/state_district_wise.json";
  URL_stateDistrictV2 = "https://api.covid19india.org/v2/state_district_wise.json";
  URL_BannerData = "https://api.covid19india.org/website_data.json";
  URL_confirmCase = "https://api.covid19india.org/data.json";
  URL_dailyCasesStateWise ="https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history"; */
  url_statewise = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise'
  url_dailycases = 'https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history'
  ulr_districtwise = "https://api.covid19india.org/state_district_wise.json"
  url_banner = "https://api.covid19india.org/website_data.json";
  districtdata: Subject<any> = new Subject<any>();
  data1;
  district;
  state;
  constructor(private http: HttpClient, private router : Router) { }


  public stateDaily() {
    // return this.http.get(this.stateDailyURL, { responseType: 'text' as 'json' });
    return this.http.get(this.url_statewise);
  }
  public stateDistrict(state) {
    console.log(" Distric data");
    this.http.get(this.ulr_districtwise).subscribe(data => {
      this.data1 = data
        console.log("District data",this.data1)
      //   console.log(this.data1[state])
      this.district = this.data1[state].districtData;
      //  console.log(state)
      this.districtdata.next(this.district);
    }
    );
  }
  
  /* public stateDistrictV2() {
    return this.http.get(this.URL_stateDistrictV2);
  } */
  public BannerData() {
    return this.http.get(this.url_banner);

  }
 /*  public confirmCase() {
    return this.http.get(this.URL_confirmCase);
  } */

  public statewiseDailyCases(){
    return this.http.get(this.url_dailycases);
  }
}
