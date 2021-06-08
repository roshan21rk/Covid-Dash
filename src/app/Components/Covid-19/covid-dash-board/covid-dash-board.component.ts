import { CovidDashService } from './../../../Service/Covid/covid-dash.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs';

/* export interface StateWise {
  STATE: string;
  CONFIRM: number;
  ACTIVE: number;
  RECOVER: number;
  DEATH:number
} */
/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
]; */
@Component({
  selector: 'app-covid-dash-board',
  templateUrl: './covid-dash-board.component.html',
  styleUrls: ['./covid-dash-board.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('expanded <=> void', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
})
export class CovidDashBoardComponent implements OnInit,AfterViewInit {
  // ELEMENT_DATA="";
    displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths','active'];
  displayedColumnsCountry: string[] = ['district', 'confirmed'];
  //  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  
  stateDistrictV2Arr :any=[]
  sortedData;
  districtdata;
  // expandedElement : [] | null =[];
  SingleStateData;
  constructor(private covidServ: CovidDashService, private router : Router) { }

  DailystateStatus: Array<any> = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
  DailyStatus: any = { total: '' }
  statewisecase: any = { confirmed: '', active: '', recovered: '', deaths: '' };
  statewisedata: Array<any> = [{ state: '', confirmed: '', recovered: '', deaths: '', active: '' }];
  // dataSource = new MatTableDataSource(this.statewisedata);
  // dataSource = new MatTableDataSource(this.statewisedata);
  ELEMENT_DATA: Array<any>=[];
  dataSource = new MatTableDataSource(this.statewisedata);
  dataSourceDist = new MatTableDataSource();
  // @ViewChild(MatSort ,{ static: false }) sort: MatSort;

  
  ngOnInit(): void {
    // this.stateDistrictV2();
     this.statewiseDaily();
    // this.dataSource.sort = this.sort;
 this.test();
    
  }
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // this.dataSourceDist.sort=this.sort;
  }
 
  test(){
   this.ELEMENT_DATA.push( 
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    );
    console.log(" Element data ", this.ELEMENT_DATA);
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }
  // stateDailyURL = "https://api.covid19india.org/states_daily.json";
  // stateDistrictURL = "https://api.covid19india.org/state_district_wise.json";
  // stateDistrictV2URL = "https://api.covid19india.org/v2/state_district_wise.json";
  // BannerDataURL = "https://api.covid19india.org/website_data.json";

  public stateDaily(){
    return this.covidServ.stateDaily().subscribe(res=>{
      console.log("State Daily ",res);
    })
  }

  public statewiseDaily() {
    return this.covidServ.statewiseDailyCases().subscribe(res => {
      
      this.sortedData = res['data']['history'];
      console.log("State  wise Daily ", res['data']['history']);
      this.calculateDiff(this.sortedData);
      this.statewisedata = this.sortedData[this.sortedData.length - 1].statewise
      this.statewisecase = this.sortedData[this.sortedData.length - 1].total
      this.dataSource = new MatTableDataSource(this.statewisedata);
      this.dataSource.sort = this.sort; // this worked 
      console.log("this.statewisecase  ... ", this.statewisecase);
      console.log("State wise data ", this.statewisedata);
      
    })
  }
 /*  public stateDistrict() {
    let state="";
    return this.covidServ.stateDistrict(state).subscribe(res => {
      console.log("State District ", res);
    })
  } */
  public BannerData() {
    return this.covidServ.BannerData().subscribe(res => {
      console.log("Banner Data ", res);
    })
  }
  calculateDiff(data) {
    let x = data
    let last: any = x[x.length - 1];
    console.log(" last ", last);
    let last2: any = x[x.length - 2];
    console.log(" last2 ", last2);

    function calculate(schema1, schema2) {
      var ret = {};
      for (var key in schema1) {
        if (schema1.hasOwnProperty(key) && schema2.hasOwnProperty(key)) {
          var obj = schema1[key];
          var obj2 = schema2[key]
          if (typeof obj === "number" && !isNaN(obj) && typeof obj2 === "number" && !isNaN(obj2)) {
            ret[key] = obj - obj2;
          }
          else {
            if (typeof obj === 'object' && typeof obj2 === 'object') {
              ret[key] = calculate(obj, obj2);
            }
            else {
              ret[key] = obj;
            }
          }
        }
      }
      return ret;
    }
    let test = calculate(last, last2);
    this.DailyStatus = test;
    this.DailystateStatus = this.DailyStatus.statewise;
  }

  OngetState(state){
    this.covidServ.stateDistrict(state);
    this.districtDataFun();
    this.getDataofState(state);
    // this.router.navigate(['/district']);
  }
  getDataofState(state: any) {
    // console.log(this.statewisedata)
    const f = this.statewisedata.filter(a => a.state == state);
    this.SingleStateData = f[0]
    console.log();
  }

  districtDataFun(){
    this.covidServ.districtdata.subscribe(data => {
      let districtDataArray = [];
      Object.keys(data).forEach((key, index) => {
        districtDataArray.push(
          Object.assign({}, { stateName: key }, data[key])
        );
      });
      this.districtdata = districtDataArray;
      this.dataSourceDist = new MatTableDataSource(this.districtdata);;
      this.dataSourceDist.sort = this.sort;
      console.log("DISTRICT", this.districtdata);
      // this.expandedElement=this.districtdata;
    });
    // console.log(" ******  ", this.covidServ.districtdata)
  }

  showHideData(data) {
    if (data && data['show'] == true) {
      data['show'] = false;
    } else {
      data['show'] = true;
    }
  }
  //functions
  public getFormat(data: any) {
   
    let finalData=[];
   
    let stateData="";
    for (let i=0; i<=data.length-1; i++) {
      let obj = { "State": "", "districtData": [] };
      stateData = data[i].state;
      
      obj['State'] = stateData;
      for (let j = 0; j <= data[i].districtData.length-1; j++) {

        // console.log("district ", data1[i].districtData[j].district);

        obj['districtData'].push({
          "district": data[i].districtData[j].district,
          "active": data[i].districtData[j].active,
          "confirmed": data[i].districtData[j].confirmed,
          "deceased": data[i].districtData[j].deceased,
          "recovered": data[i].districtData[j].recovered
        })    
    }
      finalData.push(obj);
      console.log(obj);
    }
  }
 
}


