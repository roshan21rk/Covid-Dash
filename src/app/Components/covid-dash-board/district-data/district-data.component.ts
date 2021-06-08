import { CovidDashService } from './../../../Service/Covid/covid-dash.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-district-data',
  templateUrl: './district-data.component.html',
  styleUrls: ['./district-data.component.css']
})
export class DistrictDataComponent implements OnInit {
  displayedColumns: string[] = ['district', 'confirmed'];
  districtdata :any=[];
  constructor(private cs: CovidDashService) { }

  
  // dataSource = new MatTableDataSource(this.statewisedata);

  dataSource = new MatTableDataSource(this.districtdata);

  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.cs.districtdata.subscribe(data => {

      let districtDataArray = [];
      Object.keys(data).forEach((key, index) => {
        districtDataArray.push(
          Object.assign({}, { stateName: key }, data[key])
        );
      });
      this.districtdata = districtDataArray
      this.dataSource = new MatTableDataSource(this.districtdata);
      this.dataSource.sort = this.sort;
      console.log("DISTRICT", this.districtdata);
    })

  }

}
