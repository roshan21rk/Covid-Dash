import { MatSortModule } from '@angular/material/sort';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


import { AppComponent } from './app.component';
import { LoginPageComponent } from './Components/LoginDetails/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './Components/LoginDetails/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidDashBoardComponent } from './Components/Covid-19/covid-dash-board/covid-dash-board.component';
import { DistrictDataComponent } from './Components/covid-dash-board/district-data/district-data.component';
import { IndiaMapComponent } from './Components/covid-dash-board/india-map/india-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    CovidDashBoardComponent,
    DistrictDataComponent,
    IndiaMapComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
